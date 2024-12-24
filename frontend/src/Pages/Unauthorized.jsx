import React from 'react';
import {useNavigate} from "react-router-dom"
const UnauthorizedPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="bg-white p-10 rounded-lg shadow-xl max-w-md w-full text-center">
        <h2 className="text-4xl font-bold text-red-600 mb-4">403</h2>
        <h3 className="text-xl font-semibold text-gray-700 mb-2">Unauthorized Access</h3>
        <p className="text-gray-500 mb-6">
          You don't have permission to access this page. Please contact the administrator.
        </p>
        <button
          onClick={() => navigate(-1)}
          className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default UnauthorizedPage;
