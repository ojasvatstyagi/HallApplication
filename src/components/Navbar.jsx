import React, { useState, useEffect } from 'react';
import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <nav className="flex justify-between items-center p-2 bg-[#F64E60] text-white">
      <div className="text-2xl font-bold mb-8 ml-4">Hall Booking</div>
      <div className="flex items-center">
        <div className="mr-6">{currentTime.toLocaleString()}</div>
        <button className="flex items-center bg-transparent p-2 rounded hover:bg-gray-200 transition duration-200">
          <FaUserCircle className="text-white text-2xl" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;