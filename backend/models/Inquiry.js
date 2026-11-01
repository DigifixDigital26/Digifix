import mongoose from 'mongoose';

export const SERVICES = [
  'Web Development',
  'Graphic Design & Brand Identity',
  'Social Media Management',
  'Multiple Services',
  'Other',
];

const inquirySchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, 'Name is required'], trim: true, minlength: 2, maxlength: 100 },
    businessName: { type: String, trim: true, maxlength: 120, default: '' },
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      lowercase: true,
      maxlength: 254,
      match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Email is not valid'],
    },
    phone: { type: String, trim: true, maxlength: 25, default: '' },
    service: { type: String, required: [true, 'Service is required'], enum: SERVICES },
    budget: { type: String, trim: true, maxlength: 60, default: '' },
    message: { type: String, required: [true, 'Project details are required'], trim: true, minlength: 10, maxlength: 3000 },
    status: { type: String, enum: ['new', 'in-progress', 'closed'], default: 'new', index: true },
    createdAt: { type: Date, default: Date.now, index: true, expires: '20d' }, // Automatically delete after 20 days
  },
  { timestamps: true }
);

inquirySchema.index({ createdAt: -1 });

export default mongoose.model('Inquiry', inquirySchema);
