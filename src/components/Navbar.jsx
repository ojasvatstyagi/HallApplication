import React, { useState, useEffect } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { RxHamburgerMenu } from "react-icons/rx";
import { logout } from '../Store/userslice';
import { useSelector,useDispatch } from 'react-redux';

const Navbar = ({ sb, setSidebar }) => {
  const {userData} = useSelector(state=>state.user);
  const dispatch = useDispatch();
  const [currentTime, setCurrentTime] = useState(new Date());
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleLogout = () => {
    dispatch(logout());
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown-container')) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <nav className="flex h-16 md:h-18 fixed w-full top-0 left-0 z-20 items-center p-2 bg-[#F64E60] text-white">
      {userData.role === "staff" ? <RxHamburgerMenu
        id="menubutton"
        className="text-2xl block self-center rounded-[4px] ml-2 text-white lg:hidden"
        onClick={() => setSidebar((prev) => !prev)}
      />:null}
      <div className="text-2xl font-bold lg:ml-8 ml-4">Hall Booking</div>
      <div className="flex items-center ml-auto">
        <div className="mr-3 md:block hidden">{currentTime.toLocaleString()}</div>
        <div className="relative dropdown-container">
          <button
            onClick={() => setDropdownOpen((prev) => !prev)}
            className="flex items-center bg-transparent p-2 rounded hover:bg-gray-200 transition duration-200"
          >
            <FaUserCircle className="text-white text-2xl" />
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded shadow-lg z-30">
              <a
                href="#account"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Account
              </a>
              <a
                href="#settings"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Settings
              </a>
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
