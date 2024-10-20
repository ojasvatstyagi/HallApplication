import React from 'react';
import BookingRequestAdmin from './BookingRequestAdmin'; // Adjust path as necessary

const BookingRequestsList = () => {
  // Dummy data for booking requests
  const requests = [
    {
      bookerName: 'John Doe',
      hallName: 'Main Hall',
      eventDate: '2024-10-15T00:00:00Z', // ISO format date
      eventTime: '14:00',
      verificationFile: new File(['dummy content'], 'verification1.pdf', { type: 'application/pdf' }),
    },
    {
      bookerName: 'Jane Smith',
      hallName: 'Conference Room A',
      eventDate: '2024-10-20T00:00:00Z', // ISO format date
      eventTime: '10:30',
      verificationFile: new File(['dummy content'], 'verification2.pdf', { type: 'application/pdf' }),
    },
    {
      bookerName: 'Alice Johnson',
      hallName: 'Banquet Hall',
      eventDate: '2024-11-05T00:00:00Z', // ISO format date
      eventTime: '18:00',
      verificationFile: new File(['dummy content'], 'verification3.pdf', { type: 'application/pdf' }),
    },
  ];

  const handleAccept = (request) => {
    // Logic to handle accepting the request
    console.log('Accepted:', request);
  };

  const handleReject = (request) => {
    // Logic to handle rejecting the request
    console.log('Rejected:', request);
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
                key={request.id} 
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