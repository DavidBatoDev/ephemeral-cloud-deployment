import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Get current file path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment-specific file
const env = process.env.NODE_ENV || 'development';
dotenv.config({ path: path.join(__dirname, `.env.${env}`) });

// Express setup
const app = express();
app.use(express.json());

// MongoDB connection
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/mydatabase';
mongoose.connect(mongoURI)
  .then(() => console.log(`✅ MongoDB connected to ${mongoURI}`))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// API endpoint
app.get('/api/health', (req, res) => res.json({ status: 'ok', env, time: new Date() }));

// Listen on port
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`🚀 Server running on http://localhost:${port}`));

