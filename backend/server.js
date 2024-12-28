// server.js
import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import connectDB from './config/db';

// Load environment variables
dotenv.config();

// Connect to Database
connectDB();

// Initialize Express App
const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(cors());

// Routes Placeholder
app.get('/', (req, res) => {
  res.send('Hull Management System Backend API');
});

// Set up Port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

import userRoutes from './routes/user.routes';
import hallRoutes from './routes/hall.routes';

app.use('/user', userRoutes);
app.use('/halls', hallRoutes);

import requestRoutes from './routes/request.routes';
import bookingRoutes from './routes/booking.routes';

app.use('/requests', requestRoutes);
app.use('/bookings', bookingRoutes);

import authRoutes from './routes/auth.routes';
import { authenticate, authorize } from './middlewares/auth.middleware';
import { errorHandler } from './middlewares/error.middleware';

app.use('/auth', authRoutes);

// Protect routes with authentication middleware
app.use(authenticate);

// role-based authorization
app.use('/admin', authorize(['admin']), require('./routes/admin.routes'));
app.use('/staff', authorize(['staff']), require('./routes/staff.routes'));
app.use('/user', authorize(['user']), require('./routes/user.routes'));

// Error handling middleware
app.use(errorHandler);