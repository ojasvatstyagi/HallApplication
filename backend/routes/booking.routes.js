// routes/booking.routes.js
import express from 'express';
const { getBookings, addBooking } = require('../controllers/booking.controller');
const router = express.Router();

router.get('/', getBookings);
router.post('/', addBooking);

export default router;