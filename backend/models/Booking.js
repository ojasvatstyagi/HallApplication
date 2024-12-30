// models/Booking.js
import mongoose from 'mongoose'
const bookingSchema = new mongoose.Schema(
  {
    request_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Request",
      required: true,
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    hall_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hall",
      required: true,
    },
    start_date: { type: Date, required: true },
    end_date: { type: Date, required: true },
  },
  {
    timestamps: true,
  }
);
  
export default mongoose.model('Booking', bookingSchema);
