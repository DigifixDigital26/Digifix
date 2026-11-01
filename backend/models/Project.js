import mongoose from 'mongoose';

export const CATEGORIES = ['Web Development', 'Graphic Design', 'Brand Identity', 'Social Media Design'];

const projectSchema = new mongoose.Schema(
  {
    slug: { type: String, required: true, unique: true, lowercase: true, match: /^[a-z0-9-]+$/ },
    title: { type: String, required: true, trim: true, maxlength: 120 },
    category: { type: String, required: true, enum: CATEGORIES },
    shortDescription: { type: String, required: true, trim: true, maxlength: 240 },
    description: { type: String, trim: true, maxlength: 4000, default: '' },
    image: { type: String, required: true, trim: true },
    imageAlt: { type: String, trim: true, default: '' },
    services: { type: [String], default: [] },
    featured: { type: Boolean, default: false },
    order: { type: Number, default: 0 },
    // true while the entry is a stand-in for real work. Set to false once replaced.
    isPlaceholder: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model('Project', projectSchema);
