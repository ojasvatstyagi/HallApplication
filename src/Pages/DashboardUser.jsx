import React from 'react';
import Navbar from '../components/Navbar';
import HallBookingModel from '../components/HallBookingModel';

const DashboardUser = () => {
  return (
    <>
      <Navbar />
      <div className="mt-[70px] md:mt-[100px]"> 
        <HallBookingModel />
      </div>
    </>
  );
};

export default DashboardUser;
