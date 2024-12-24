import React from 'react';

const BookingRequestAdmin = ({ request, onAccept, onReject }) => {
  const { hallName, eventDate, eventTime, bookerName, verificationFile } = request;

  return (
    <tr key={request.id}>
      <td className="px-6 py-4 whitespace-nowrap">{hallName}</td>
      <td className="px-6 py-4 whitespace-nowrap">{new Date(eventDate).toLocaleDateString()}</td>
      <td className="px-6 py-4 whitespace-nowrap">{eventTime}</td>
      <td className="px-6 py-4 whitespace-nowrap">{bookerName}</td>
      <td className="px-6 py-4 whitespace-nowrap">
        {verificationFile ? (
          <a 
            href={URL.createObjectURL(verificationFile)} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            View Document
          </a>
        ) : (
          'No Document'
        )}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800`}>
          Pending
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <button
          className="bg-green-500 text-white px-3 py-1 rounded mr-2 hover:bg-green-600 transition-colors duration-300"
          onClick={() => onAccept(request)}
        >
          Accept
        </button>
        <button
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors duration-300"
          onClick={() => onReject(request)}
        >
          Reject
        </button>
      </td>
    </tr>
  );
};

export default BookingRequestAdmin;