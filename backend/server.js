// server.js
import express from "express"
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors'
import connectDB from './config/db.js';
import userRoutes from './routes/user.routes.js'
import hallRoutes from './routes/hall.routes.js'

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

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
