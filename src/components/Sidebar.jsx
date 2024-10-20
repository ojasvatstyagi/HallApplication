// Sidebar.js
import React, { useEffect, useRef } from "react";
import { FiHome, FiPlusCircle, FiCheckCircle } from "react-icons/fi";
import { FaBuilding } from "react-icons/fa";

const Sidebar = ({ activeTab, setActiveTab,show,setShow }) => {
  let val = show?"block":"hidden"
  let sidebarref = useRef(null); //initially sidebarref is just an object containing {current:null}
  useEffect(()=>{
    document.addEventListener('mousedown',(event)=>{
      //this checks whether the current clicked item comes in area of sidebar
      if(event.target.id == "menubutton")return;
      if(sidebarref.current && !sidebarref.current.contains(event.target))
        setShow(false);
    })
  },[]);
  return (
    //below ref ={sidebarref} make it store the value of reference of sidebar div
    <div ref={sidebarref} className={`w-64 bg-[#F64E60] text-white px-6 pt-10 block h-full lg:block lg:static ${val} fixed z-20`}>
      <nav>
        <button
          className={`w-full text-left py-2 px-4 rounded ${activeTab === "overview" ? "bg-white text-[#F64E60]" : ""}`}
          onClick={() => {setActiveTab("overview");setShow(false)}}
        >
          <FiHome className="inline-block mr-2" /> Overview
        </button>
        <button
          className={`w-full text-left py-2 px-4 rounded mt-2 ${activeTab === "manage" ? "bg-white text-[#F64E60]" : ""}`}
          onClick={() => {setActiveTab("manage");setShow(false)}}
        >
          <FaBuilding className="inline-block mr-2" /> Manage Halls
        </button>
        <button
          className={`w-full text-left py-2 px-4 rounded mt-2 ${activeTab === "requests" ? "bg-white text-[#F64E60]" : ""}`}
          onClick={() => {setActiveTab("requests");setShow(false)}}
        >
          <FiCheckCircle className="inline-block mr-2" /> Requests
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;