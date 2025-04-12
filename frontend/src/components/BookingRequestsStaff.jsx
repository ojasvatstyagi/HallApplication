// BookingRequests.js
import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Assuming axios is used for API calls

const BookingRequestsStaff = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await axios.get('/staff/requests');
        setRequests(response.data);
      } catch (error) {
        console.error('Error fetching requests:', error);
      }
    };

    fetchRequests();
  }, []);

  const handleAcceptRequest = async (request) => {
    try {
      await axios.put(`/staff/requests/${request._id}`, { status_staff: 'accepted' });
      // Update the requests state to reflect the change
      setRequests(requests.map(req => (req._id === request._id ? { ...req, status_staff: 'accepted' } : req)));
    } catch (error) {
      console.error('Error accepting request:', error);
    }
  };

  const handleRejectRequest = async (request) => {
    try {
      await axios.put(`/staff/requests/${request._id}`, { status_staff: 'rejected' });
      // Update the requests state to reflect the change
      setRequests(requests.map(req => (req._id === request._id ? { ...req, status_staff: 'rejected' } : req)));
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
              <tr key={request._id}>
                <td className="px-6 py-4 whitespace-nowrap text-center">{request.hall_id?.hall_name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-center">{new Date(request.request_timing).toLocaleDateString()}</td>
                <td className="px-6 py-4 whitespace-nowrap text-center">{new Date(request.request_timing).toLocaleTimeString()}</td>
                <td className="px-6 py-4 whitespace-nowrap text-center">{request.user_id?.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  {request.support_document ? (
                    <a href={request.support_document} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                      View Document
                    </a>
                  ) : (
                    'No Document Available'
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">{request.status_staff || 'Pending'}</td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <button onClick={() => handleAcceptRequest(request)} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2">
                    Accept
                  </button>
                  <button onClick={() => handleRejectRequest(request)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookingRequestsStaff;