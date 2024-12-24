// server.js
const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/db');

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

const userRoutes = require('./routes/user.routes');
const hallRoutes = require('./routes/hall.routes');

app.use('/user', userRoutes);
app.use('/halls', hallRoutes);