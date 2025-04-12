import React, { useState, useEffect } from 'react';
import BookingRequestAdmin from './BookingRequestAdmin';
import axios from 'axios'; // Assuming axios is used for API calls

const BookingRequestsList = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await axios.get('/admin/requests');
        setRequests(response.data);
      } catch (error) {
        console.error('Error fetching requests:', error);
      }
    };

    fetchRequests();
  }, []);

  const handleAccept = async (request) => {
    try {
      await axios.put(`/admin/requests/${request._id}`, { status_admin: 'accepted' });
      // Update the requests state to reflect the change
      setRequests(requests.map(req => (req._id === request._id ? { ...req, status_admin: 'accepted' } : req)));
    } catch (error) {
      console.error('Error accepting request:', error);
    }
  };

  const handleReject = async (request) => {
    try {
      await axios.put(`/admin/requests/${request._id}`, { status_admin: 'rejected' });
      // Update the requests state to reflect the change
      setRequests(requests.map(req => (req._id === request._id ? { ...req, status_admin: 'rejected' } : req)));
    } catch (error) {
      console.error('Error rejecting request:', error);
    }
  };

  return (
    <div className="w-full mt-20 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Booking Requests</h2>
      <div className="bg-white rounded-lg shadow-md overflow-auto w-full">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Hall</th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Booker</th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Document</th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {requests.map((request) => (
              <BookingRequestAdmin
                key={request._id}
                request={request} 
                onAccept={handleAccept} 
                onReject={handleReject} 
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookingRequestsList;