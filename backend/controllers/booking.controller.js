// controllers/booking.controller.js
import Booking from '../models/Booking';

exports.getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().populate('user_id hall_id request_id');
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching bookings', error });
  }
};

exports.addBooking = async (req, res) => {
  const { request_id, user_id, hall_id, start_date, end_date } = req.body;
  try {
    const booking = new Booking({ request_id, user_id, hall_id, start_date, end_date });
    await booking.save();
    res.status(201).json({ message: 'Booking added successfully', booking });
  } catch (error) {
    res.status(500).json({ message: 'Error adding booking', error });
  }
};