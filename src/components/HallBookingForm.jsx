import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const HallBookingForm = () => {
  const [formData, setFormData] = useState({
    hallName: '',
    eventDate: new Date(),
    eventTime: '',
    eventName: '',
    clubName: '',
    bookerName: '',
    verificationFile: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, verificationFile: e.target.files[0] });
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, eventDate: date });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Request Hall Booking</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Hall Name</label>
          <input
            type="text"
            name="hallName"
            value={formData.hallName}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Event Date</label>
          <DatePicker
            selected={formData.eventDate}
            onChange={handleDateChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            dateFormat="yyyy/MM/dd"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Event Time</label>
          <input
            type="time"
            name="eventTime"
            value={formData.eventTime}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Event Name</label>
          <input
            type="text"
            name="eventName"
            value={formData.eventName}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Club Name</label>
          <input
            type="text"
            name="clubName"
            value={formData.clubName}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
          <input
            type="text"
            name="bookerName"
            value={formData.bookerName}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Upload Verification Document</label>
          <input
            type="file"
            accept=".pdf,.jpg,.jpeg,.png"
            onChange={handleFileChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        <button type="submit" className="w-full bg-[#F64E60] text-white py-2 rounded-md hover:bg-[#F64E60]/80 transition duration-200">
          Book Hall
        </button>
      </form>
    </div>
  );
};

export default HallBookingForm;