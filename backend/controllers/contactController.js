import mongoose from 'mongoose';
import { body, validationResult } from 'express-validator';
import Inquiry, { SERVICES } from '../models/Inquiry.js';
import asyncHandler from '../middleware/asyncHandler.js';

// Removes HTML tags and control characters. Text is stored as plain text,
// so anything that later displays it must still escape it on output.
const stripUnsafe = (value, { multiline = false } = {}) => {
  let text = String(value ?? '')
    .replace(/<[^>]*>/g, '')
    .replace(multiline ? /[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g : /[\u0000-\u001F]/g, ' ');
  if (!multiline) text = text.replace(/\s+/g, ' ');
  return text.trim();
};
const single = (v) => stripUnsafe(v);
const multi = (v) => stripUnsafe(v, { multiline: true });

export const contactValidation = [
  body('name').isString().withMessage('Enter your full name.').bail()
    .customSanitizer(single).isLength({ min: 2, max: 100 }).withMessage('Name must be between 2 and 100 characters.'),
  body('businessName').optional({ values: 'falsy' }).isString().bail()
    .customSanitizer(single).isLength({ max: 120 }).withMessage('Business name must be 120 characters or fewer.'),
  body('email').isString().withMessage('Enter your email address.').bail()
    .customSanitizer((v) => single(v).toLowerCase())
    .isEmail().withMessage('Enter a valid email address.')
    .isLength({ max: 254 }).withMessage('Email address is too long.'),
  body('phone').optional({ values: 'falsy' }).isString().bail()
    .customSanitizer(single)
    .matches(/^[+()\d\s-]{7,20}$/).withMessage('Enter a valid phone number.'),
  body('service').isString().withMessage('Select a service.').bail()
    .customSanitizer(single).isIn(SERVICES).withMessage('Select a service from the list.'),
  body('budget').optional({ values: 'falsy' }).isString().bail()
    .customSanitizer(single).isLength({ max: 60 }).withMessage('Budget must be 60 characters or fewer.'),
  body('message').isString().withMessage('Tell us about your project.').bail()
    .customSanitizer(multi).isLength({ min: 10, max: 3000 }).withMessage('Project details must be between 10 and 3000 characters.'),
];

export const submitInquiry = asyncHandler(async (req, res) => {
 if (typeof req.body.botcheck === 'string' && req.body.botcheck.trim() !== '') {
    return res.status(400).json({ success: false, message: 'Your submission could not be accepted.' });
  }

  const result = validationResult(req);
  if (!result.isEmpty()) {
    const errors = {};
    result.array().forEach((e) => {
      if (!errors[e.path]) errors[e.path] = e.msg;
    });
    return res.status(422).json({ success: false, message: 'Please correct the highlighted fields.', errors });
  }

  if (mongoose.connection.readyState !== 1) {
    return res.status(503).json({ success: false, message: 'We could not save your inquiry right now. Please try again shortly.' });
  }

  const { name, businessName, email, phone, service, budget, message } = req.body;
  const inquiry = await Inquiry.create({ name, businessName, email, phone, service, budget, message });

  res.status(201).json({
    success: true,
    message: 'Thank you. Your inquiry has been received and we will be in touch.',
    id: inquiry._id,
  });
});
