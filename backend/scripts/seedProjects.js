import dns from 'dns'
dns.setServers(["1.1.1.1","8.8.8.8"]);
import 'dotenv/config';
import fs from 'node:fs';
import mongoose from 'mongoose';
import { connectDB } from '../config/db.js';
import Project from '../models/Project.js';

// Upserts by slug, so running it twice does not duplicate or delete anything.
const run = async () => {
  const data = JSON.parse(fs.readFileSync(new URL('../data/projects.json', import.meta.url), 'utf8'));
  await connectDB();
  const ops = data.map((p) => ({ updateOne: { filter: { slug: p.slug }, update: { $set: p }, upsert: true } }));
  const result = await Project.bulkWrite(ops);
  console.log(`Seed complete. Inserted: ${result.upsertedCount}, updated: ${result.modifiedCount}.`);
  await mongoose.disconnect();
};

run().catch((err) => {
  console.error('Seed failed:', err.message);
  process.exit(1);
});
