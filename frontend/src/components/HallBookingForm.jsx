import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios'; // Assuming axios is used for API calls

const HallBookingForm = ({ hall, onClose }) => {
  const [formData, setFormData] = useState({
    hall_id: hall._id || '',
    request_timing: new Date(),
    purpose: '',
    club_name: '',
    requester_name: '',
    support_document: null,
  });
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, support_document: e.target.files[0] });
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, request_timing: date });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionStatus('pending');
    try {
      const formDataToSend = new FormData();
      for (const key in formData) {
        formDataToSend.append(key, formData[key]);
      }

      const response = await axios.post('/user/requests', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 201) {
        setSubmissionStatus('success');
        console.log('Booking request submitted successfully');
        setTimeout(() => {
          onClose();
        }, 2000);
      } else {
        setSubmissionStatus('error');
        console.error('Error submitting booking request:', response.data);
      }
    } catch (error) {
      setSubmissionStatus('error');
      console.error('Error submitting booking request:', error);
    }
  };

  return (
    <div className="fixed top-0 left-0 inset-0 flex items-center justify-center bg-black bg-opacity-50 p-6 overflow-y-auto z-50 h-screen">
      <div className="bg-white mt-[200px] md:mt-[0px] rounded-lg shadow-lg max-w-lg w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>

        <h2 className="text-2xl font-semibold mb-4">Request Hall Booking</h2>

        {submissionStatus === 'success' && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
            <strong className="font-bold">Success!</strong> Booking request submitted successfully.
          </div>
        )}

        {submissionStatus === 'error' && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
            <strong className="font-bold">Error!</strong> There was an error submitting your booking request. Please try again.
          </div>
        )}

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4 col-span-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">Hall Name</label>
            <input
              type="text"
              name="hallName"
              value={hall.hall_name}
              readOnly
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 bg-gray-100 cursor-not-allowed"
            />
          </div>

          <div className="mb-4 col-span-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">Event Date</label>
            <DatePicker
              selected={formData.request_timing}
              onChange={handleDateChange}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              dateFormat="dd-MM-yyyy HH:mm"
              className="block border border-gray-300 rounded-md p-2 w-full"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Event Purpose</label>
            <input
              type="text"
              name="purpose"
              value={formData.purpose}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Club Name</label>
            <input
              type="text"
              name="club_name"
              value={formData.club_name}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          <div className="mb-4 col-span-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">Requester Name</label>
            <input
              type="text"
              name="requester_name"
              value={formData.requester_name}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          <div className="mb-4 col-span-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">Support Document (Optional)</label>
            <input
              type="file"
              name="support_document"
              onChange={handleFileChange}
              className="block w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          <button
            type="submit"
            disabled={submissionStatus === 'pending'}
            className="w-full bg-[#F64E60] text-white py-2 rounded-md hover:bg-[#F64E60]/80 transition duration-200 col-span-full"
          >
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
