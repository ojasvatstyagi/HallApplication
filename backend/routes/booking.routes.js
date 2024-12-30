// routes/booking.routes.js
import express from 'express';
import { getBookings, addBooking } from '../controllers/booking.controller.js';
const router = express.Router();

router.get('/', getBookings);
router.post('/', addBooking);

export default router;