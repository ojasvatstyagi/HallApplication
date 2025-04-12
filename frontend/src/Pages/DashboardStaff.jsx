import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import HallOverview from "../components/HallOverview";
import ManageHalls from "../components/ManageHalls";
import BookingRequestsStaff from "../components/BookingRequestsStaff";
import Navbar from "../components/Navbar";
import axios from 'axios'; // Assuming axios is used for API calls
import { useSelector } from 'react-redux';

const StaffInterface = ({sb,setSidebar}) => {
  const [activeTab, setActiveTab] = useState("overview");
  const [halls, setHalls] = useState([]);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const { userData } = useSelector((state) => state.user);
    const fetchHalls = async () => {
      try {
        const response = await axios.get('/halls');
        setHalls(response.data);
      } catch (error) {
        console.error('Error fetching halls:', error);
      }
    };

    const fetchBookings = async () => {
      try {
        const response = await axios.get('/bookings');
        setBookings(response.data);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };

    fetchHalls();
    fetchBookings();
  }, []);


  const handleAddHall = async (hallData) => {
    try {
      const response = await axios.post('/admin/halls', hallData);
      setHalls([...halls, response.data.hall]); // Assuming the response includes the new hall
    } catch (error) {
      console.error('Error adding hall:', error);
    }
  };

  const handleUpdateHall = async (id, hallData) => {
    try {
      await axios.put(`/admin/halls/${id}`, hallData);
      setHalls(halls.map(hall => (hall._id === id ? { ...hall, ...hallData } : hall)));
    } catch (error) {
      console.error('Error updating hall:', error);
    }
  };

  const handleDeleteHall = async (id) => {
    try {
      await axios.delete(`/admin/halls/${id}`);
      setHalls(halls.filter(hall => hall._id !== id));
    } catch (error) {
      console.error('Error deleting hall:', error);
    }
  };
  
  return (
    <div className="flex  h-screen pt-12 md:pt-18 bg-gray-100">
      {/* Sidebar */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} show={sb} setShow = {setSidebar} />

      {/* Main content */}
      <div className="flex-1 p-10 overflow-y-scroll">
        <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

        {activeTab === "overview" && (
          <HallOverview halls={halls} bookings={bookings} />  
        )}

        {activeTab === "manage" && userData.role === 'admin' && (
          <ManageHalls 
            halls={halls} 
            handleAddHall={handleAddHall} 
            handleUpdateHall={handleUpdateHall} 
            handleDeleteHall={handleDeleteHall} 
          />
        )}

        {activeTab === "requests" && (
          <BookingRequestsStaff />
        )}
      </div>
    </div>
  );
};
const DashboardStaff=()=>{
  const [sidebar,setSidebarVisibility] = useState(false);
  return (
    <>
      <Navbar sb = {sidebar}setSidebar={setSidebarVisibility}/>
      <StaffInterface sb={sidebar} setSidebar={setSidebarVisibility}/>
    </>
  )
}

export default DashboardStaff;