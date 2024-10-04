// Sidebar.js
import React from "react";
import { FiHome, FiPlusCircle, FiCheckCircle } from "react-icons/fi";
import { FaBuilding } from "react-icons/fa";

const Sidebar = ({ activeTab, setActiveTab }) => {
  return (
    <div className="w-64 bg-[#F64E60] text-white p-6">
      <div className="text-2xl font-bold mb-8">Hall Booking</div>
      <nav>
        <button
          className={`w-full text-left py-2 px-4 rounded ${activeTab === "overview" ? "bg-white text-[#F64E60]" : ""}`}
          onClick={() => setActiveTab("overview")}
        >
          <FiHome className="inline-block mr-2" /> Overview
        </button>
        <button
          className={`w-full text-left py-2 px-4 rounded mt-2 ${activeTab === "manage" ? "bg-white text-[#F64E60]" : ""}`}
          onClick={() => setActiveTab("manage")}
        >
          <FaBuilding className="inline-block mr-2" /> Manage Halls
        </button>
        <button
          className={`w-full text-left py-2 px-4 rounded mt-2 ${activeTab === "requests" ? "bg-white text-[#F64E60]" : ""}`}
          onClick={() => setActiveTab("requests")}
        >
          <FiCheckCircle className="inline-block mr-2" /> Requests
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;