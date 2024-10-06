import React from "react";

const HallOverview = ({ halls, bookings }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Hall Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {halls.map((hall) => (
          <div key={hall.id} className="bg-white rounded-lg shadow-md p-6 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
            <img 
              src={hall.imageUrl} 
              alt={hall.name} 
              className="w-full h-40 object-cover rounded-t-lg mb-4" 
            />
            <h3 className="text-xl font-semibold mb-2 text-[#F64E60]">{hall.name}</h3>
            <p className="text-gray-600 mb-2">{hall.description}</p>
            <p className="text-gray-600 font-bold">Capacity: <span className="text-[#F64E60]">{hall.capacity}</span></p>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-500">Available for booking</p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-semibold mt-12 mb-4">Current Bookings</h2>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hall</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Event</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {bookings.map((booking) => (
              <tr key={booking.id}>
                <td className="px-6 py-4 whitespace-nowrap">{booking.hallName}</td>
                <td className="px-6 py-4 whitespace-nowrap">{booking.date}</td>
                <td className="px-6 py-4 whitespace-nowrap">{booking.time}</td>
                <td className="px-6 py-4 whitespace-nowrap">{booking.event}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HallOverview;