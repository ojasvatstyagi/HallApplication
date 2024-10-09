import React, { useState, useEffect } from 'react';

const Modal = ({ isOpen, onClose, onSubmit, initialData }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    capacity: '',
    image: null,  // Add a new field for the image
  });

  useEffect(() => {
    if (initialData) {
      // When editing a hall, set the form data based on initialData
      setFormData({
        name: initialData.name || '',
        description: initialData.description || '',
        capacity: initialData.capacity || '',
        image: initialData.image || '',  // Reset the image field
      });
    } else {
      // When adding a new hall, reset the form to its initial state
      setFormData({
        name: '',
        description: '',
        capacity: '',
        image: null,
      });
    }
  }, [initialData, isOpen]);  // Track both initialData and isOpen to handle reset when modal is opened

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    setFormData((prev) => ({ ...prev, image: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);  // Submit the form data including image
    onClose();  // Close the modal after submission
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="relative bg-white rounded-lg shadow-lg w-full max-w-lg p-8 overflow-y-auto max-h-[80vh]">
        <button
          className="absolute top-5 right-7 text-2xl text-gray-600 hover:text-gray-900"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-2xl font-semibold mb-4">{initialData ? 'Edit Hall' : 'Add New Hall'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter hall name"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Description</label>
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter hall description"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Capacity</label>
            <input
              type="number"
              name="capacity"
              value={formData.capacity}
              onChange={handleChange}
              placeholder="Enter hall capacity"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-1">Image</label>
            <input
              type="file"
              name="image"
              onChange={handleImageChange}
              accept="image/*"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <button
            type="submit"
            className="bg-[#6610f2] text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors duration-300"
          >
            {initialData ? 'Update Hall' : 'Add Hall'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
