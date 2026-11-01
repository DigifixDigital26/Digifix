import { Router } from 'express';
import rateLimit from 'express-rate-limit';
import { contactValidation, submitInquiry } from '../controllers/contactController.js';

const router = Router();

const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  limit: 5,
  standardHeaders: 'draft-7',
  legacyHeaders: false,
  message: { success: false, message: 'Too many submissions from this connection. Please try again later.' },
});

router.post('/', contactLimiter, contactValidation, submitInquiry);

export default router;
