// models/Hall.js
const hallSchema = new mongoose.Schema({
    hall_name: { type: String, required: true },
    capacity: { type: Number, required: true },
    location: { type: String, required: true },
    description: { type: String },
    image: { type: String },
    availability_status: { type: String, enum: ['available', 'not_available'], default: 'available' },
    support_document: { type: String },
  }, { timestamps: true });
  
  module.exports = mongoose.model('Hall', hallSchema);