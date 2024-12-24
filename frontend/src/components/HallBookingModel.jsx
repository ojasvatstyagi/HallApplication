import React, { useState } from "react";
import HallBookingForm from "./HallBookingForm"; // Assuming you have a BookingForm component

const HallBookingModel = () => {
  const [selectedHall, setSelectedHall] = useState(null);

  const halls = [
    { id: 1, name: "Main Auditorium", description: "Large hall with stage and AV equipment", capacity: 500, image: "" },
    { id: 2, name: "Conference Room A", description: "Medium-sized room with projector", capacity: 50, image: "" },
    { id: 3, name: "Lecture Hall B", description: "Tiered seating with whiteboard", capacity: 200, image: "" },
  ];

  const handleCardClick = (hall) => {
    setSelectedHall(hall);
  };

  const closeForm = () => {
    setSelectedHall(null);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {halls.map((hall) => (
          <div
            key={hall.id}
            className="bg-white rounded-lg shadow-md p-6 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
            onClick={() => handleCardClick(hall)}
          >
            {hall.image ? (
              <img
                src={hall.image}
                alt={hall.name}
                className="w-full h-[160px] object-cover rounded-t-lg mb-[10px]"
              />
            ) : (
              <div className="w-full h-[160px] bg-gray-200 rounded-t-lg mb-[10px] flex items-center justify-center">
                <p className="text-gray-400">No Image Available</p>
              </div>
            )}
            <h3 className="text-xl font-semibold mb-[8px] text-[#F64E60]">
              {hall.name}
            </h3>
            <p className="text-gray-[600] mb-[8px]">{hall.description}</p>
            <p className="text-gray-[600] font-bold">
              Capacity: <span className="text-[#F64E60]">{hall.capacity}</span>
            </p>
            <div className="mt-[10px] pt-[10px] border-t border-gray-[200]">
              <p className="text-sm text-gray-[500]">Available for booking</p>
            </div>
          </div>
        ))}
      </div>

      {selectedHall && (
        <HallBookingForm
          hall={selectedHall}
          isOpen={!!selectedHall} 
          onClose={closeForm}
        />
      )}
    </>
  );
};

export default HallBookingModel;