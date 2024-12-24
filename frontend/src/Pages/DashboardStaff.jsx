import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import HallOverview from "../components/HallOverview";
import ManageHalls from "../components/ManageHalls";
import BookingRequestsStaff from "../components/BookingRequestsStaff";
import Navbar from "../components/Navbar";

const StaffInterface = ({sb,setSidebar}) => {
  const [activeTab, setActiveTab] = useState("overview");
  const [halls, setHalls] = useState([
    { id: 1, name: "Main Auditorium", description: "Large hall with stage and AV equipment", capacity: 500, image:"" },
    { id: 2, name: "Conference Room A", description: "Medium-sized room with projector", capacity: 50,image:"" },
    { id: 3, name: "Lecture Hall B", description: "Tiered seating with whiteboard", capacity: 200,image:"" },
  ]);
  const [bookings, setBookings] = useState([
    { id: 1, hallName: "Main Auditorium", date: "2023-06-15", time: "14:00-16:00", event: "Annual Convocation" },
    { id: 2, hallName: "Conference Room A", date: "2023-06-16", time: "10:00-12:00", event: "Department Meeting" },
  ]);
  const [requests, setRequests] = useState([
    { id: 1, hallName: "Lecture Hall B", date: "2023-06-17", time: "13:00-15:00", event: "Guest Lecture", club: "Science Club", status: "Pending" },
    { id: 2, hallName: "Main Auditorium", date: "2023-06-18", time: "18:00-21:00", event: "Cultural Night", club: "Arts Society", status: "Pending" },
  ]);
  const handleAddHall = () => {
    // Implement add hall functionality (e.g., open modal)
    console.log("Add New Hall");
  };

  const handleUpdateHall = (id) => {
    const hallToUpdate = halls.find(hall => hall.id === id);
    if (hallToUpdate) {
      console.log("Updating hall:", hallToUpdate);
      // Here you would typically open a modal or navigate to an edit page
    }
  };

  const handleDeleteHall = (id) => {
    setHalls(halls.filter(hall => hall.id !== id));
  };

  const handleAcceptRequest = (id) => {
    setRequests(requests.map(request =>
      request.id === id ? { ...request, status: "Approved (Level 1)" } : request
    ));
  };

  const handleRejectRequest = (id) => {
    setRequests(requests.map(request =>
      request.id === id ? { ...request, status: "Rejected" } : request
    ));
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

        {activeTab === "manage" && (
          <ManageHalls 
            halls={halls} 
            handleAddHall={handleAddHall} 
            handleUpdateHall={handleUpdateHall} 
            handleDeleteHall={handleDeleteHall} 
          />
        )}

        {activeTab === "requests" && (
          <BookingRequestsStaff 
            requests={requests} 
            handleAcceptRequest={handleAcceptRequest} 
            handleRejectRequest={handleRejectRequest} 
          />
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