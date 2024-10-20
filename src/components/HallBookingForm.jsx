import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const HallBookingForm = ({ hall, onClose }) => {
  const [formData, setFormData] = useState({
    hallName: hall.name || '',
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
    // Optionally close the form after submission
    onClose();
  };

  return (
      <div className=" fixed top-0 left-0 inset-0 flex items-center justify-center bg-black bg-opacity-50 p-6 overflow-y-auto z-50 h-screen">
        <div className="bg-white mt-[200px] md:mt-[0px] rounded-lg shadow-lg max-w-lg w-full p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          >
            &times;
          </button>
          <h2 className="text-2xl font-semibold mb-4">Request Hall Booking</h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Hall Name</label>
              <input
                type="text"
                name="hallName"
                value={formData.hallName}
                onChange={handleChange}
                readOnly // Make it read-only since it's passed from the parent
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 bg-gray-100 cursor-not-allowed"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Event Date</label>
              <DatePicker
                selected={formData.eventDate}
                onChange={handleDateChange}
                className="block border border-gray-300 rounded-md p-2 w-full"
                dateFormat="dd-MM-yyyy"
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

            <div className="mb-4 col-span-full">
              <label className="block text-sm font-medium text-gray-700 mb-1">Upload Verification Document</label>
              <input
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={handleFileChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
              {formData.verificationFile && (
                <p className="mt-2 text-sm text-gray-500">Selected file: {formData.verificationFile.name}</p>
              )}
            </div>

            <button type="submit" className="w-full bg-[#F64E60] text-white py-2 rounded-md hover:bg-[#F64E60]/80 transition duration-200 col-span-full">
              Book Hall
            </button>
          </form>

          <button
            onClick={onClose}
            className="mt-4 w-full bg-gray-300 text-black py-2 rounded-md hover:bg-gray-400 transition duration-200 col-span-full"
          >
            Cancel
          </button>
        </div>
      </div>

  );
};

export default HallBookingForm;