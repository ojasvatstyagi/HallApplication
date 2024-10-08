import React from "react";
import { FiEdit, FiTrash2, FiPlusCircle } from "react-icons/fi";

const ManageHalls = ({ halls, handleAddHall, handleUpdateHall, handleDeleteHall }) => {
  return (
    <div>
        <h2 className="text-2xl font-semibold mb-4">Manage Halls</h2>
        <button
            className="bg-[#6610f2] text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors duration-300 mb-6"
            onClick={handleAddHall}
        >
            <FiPlusCircle className="inline-block mr-2" /> Add New Hall
        </button>
        <div className="rounded-lg shadow-md w-full overflow-x-auto">
            <table className="w-full">
            <thead className="bg-gray-50">
                <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Capacity</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {halls.map((hall) => (
                <tr key={hall.id}>
                    <td className="px-6 py-4 whitespace-nowrap">{hall.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{hall.description}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{hall.capacity}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                    <button
                        className="text-[#6610f2] hover:text-opacity-80 mr-3"
                        onClick={() => handleUpdateHall(hall.id)}
                        aria-label="Edit hall"
                    >
                        <FiEdit />
                    </button>
                    <button
                        className="text-red-500 hover:text-opacity-80"
                        onClick={() => handleDeleteHall(hall.id)}
                        aria-label="Delete hall"
                    >
                        <FiTrash2 />
                    </button>
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
    </div>
  );
};

export default ManageHalls;