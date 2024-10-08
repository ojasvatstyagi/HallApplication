import React, { useState, useEffect } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = ({setSidebar}) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <nav className="flex h-20 fixed w-full top-0 left-0 z-20  items-center p-2 bg-[#F64E60] text-white">
      <RxHamburgerMenu className=" text-2xl block self-center rounded-[4px] ml-2 text-white lg:hidden" onClick={()=>{setSidebar((prev)=>!prev)}}/>
      <div className="text-2xl font-bold lg:ml-8 ml-4">Hall Booking</div>
      <div className="flex items-center ml-auto">
        <div className="mr-3 md:block hidden">{currentTime.toLocaleString()}</div>
        <button className="flex items-center bg-transparent p-2 rounded hover:bg-gray-200 transition duration-200">
          <FaUserCircle className="text-white text-2xl" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;