import express from "express"
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors'
import connectDB from './config/db.js';
import userRoutes from './routes/user.routes.js'
import hallRoutes from './routes/hall.routes.js'
import authRoutes from './routes/auth.routes.js';
import requestRoutes from './routes/request.routes.js';
import adminRoutes from './routes/admin.routes.js';
import staffRoutes from './routes/staff.routes.js';
import bookingRoutes from './routes/booking.routes.js';
import { authenticate, authorize } from './middlewares/auth.middleware.js';
import { errorHandler } from './middlewares/error.middleware.js';

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
// Route for user authentication
app.use('/auth', authRoutes);

// Protect routes with authentication middleware
app.use(authenticate);

// role-based authorization
app.use('/admin', authorize(['admin']), adminRoutes);
app.use('/staff', authorize(['staff']), staffRoutes);
// Apply role-based authorization to user routes
app.use('/user', userRoutes); //Already applied to specific routes in userRoutes

app.use('/halls', hallRoutes);
app.use('/requests', requestRoutes);
app.use('/bookings', bookingRoutes);

// Error handling middleware
app.use(errorHandler);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
