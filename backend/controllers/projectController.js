import Project, { CATEGORIES } from '../models/Project.js';
import asyncHandler from '../middleware/asyncHandler.js';

export const getProjects = asyncHandler(async (req, res) => {
  const filter = {};
  if (typeof req.query.category === 'string' && CATEGORIES.includes(req.query.category)) {
    filter.category = req.query.category;
  }
  if (req.query.featured === 'true') filter.featured = true;
  const projects = await Project.find(filter).sort({ order: 1, createdAt: -1 }).select('-__v').lean();
  res.json({ success: true, count: projects.length, data: projects });
});

export const getProjectBySlug = asyncHandler(async (req, res) => {
  const slug = String(req.params.slug || '');
  if (!/^[a-z0-9-]+$/.test(slug)) return res.status(404).json({ success: false, message: 'Project not found.' });
  const project = await Project.findOne({ slug }).select('-__v').lean();
  if (!project) return res.status(404).json({ success: false, message: 'Project not found.' });
  res.json({ success: true, data: project });
});
