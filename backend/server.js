import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { connectDB } from './config/db.js';
import contactRoutes from './routes/contactRoutes.js';
import projectRoutes from './routes/projectRoutes.js';
import notFound from './middleware/notFound.js';
import errorHandler from './middleware/errorHandler.js';



const app = express();

if (process.env.TRUST_PROXY && process.env.TRUST_PROXY !== '0') {
  app.set('trust proxy', Number(process.env.TRUST_PROXY) || 1);
}

const allowedOrigins = process.env.CLIENT_URL
  .split(',')
  .map((o) => o.trim())
  .filter(Boolean);

app.use(helmet());
app.use(
  cors({
    origin(origin, cb) {
      if (!origin || allowedOrigins.includes(origin)) return cb(null, true);
      cb(new Error('Origin not allowed by CORS'));
    },
    methods: ['GET', 'POST'],
  })
);
app.use(express.json({ limit: '20kb' }));
app.use('/api', rateLimit({ windowMs: 15 * 60 * 1000, limit: 200, standardHeaders: 'draft-7', legacyHeaders: false }));

app.get('/api/health', (_req, res) => res.json({ success: true, status: 'ok' }));
app.use('/api/contact', contactRoutes);
app.use('/api/projects', projectRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => console.log(`API listening on port ${PORT}`));
  } catch (err) {
    console.error('Failed to start server:', err.message);
    process.exit(1);
  }
};

start();
