import express from "express"
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors'
import connectDB from './config/db.js';
import userRoutes from './routes/user.routes.js'
import hallRoutes from './routes/hall.routes.js'
import authRoutes from './routes/auth.routes.js';
import { authenticate, authorize } from './middlewares/auth.middleware.js';
import { errorHandler } from './middlewares/error.middleware.js';
import userRoutes from './routes/user.routes.js';
import hallRoutes from './routes/hall.routes.js';

// Load environment variables
dotenv.config();

// Connect to Database
connectDB();

// Initialize Express App
const app = express();
// Set up Port
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(bodyParser.json());
app.use(cors());

// Routes Placeholder
app.get('/', (req, res) => {
  res.send('Hall Management System Backend API');
});


app.use('/user', userRoutes);
app.use('/halls', hallRoutes);

import requestRoutes from './routes/request.routes';
import bookingRoutes from './routes/booking.routes';

app.use('/requests', requestRoutes);
app.use('/bookings', bookingRoutes);


app.use('/auth', authRoutes);

// Protect routes with authentication middleware
app.use(authenticate);

// role-based authorization
app.use('/admin', authorize(['admin']), require('./routes/admin.routes'));
app.use('/staff', authorize(['staff']), require('./routes/staff.routes'));
app.use('/user', authorize(['user']), require('./routes/user.routes'));

// Error handling middleware
app.use(errorHandler);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
