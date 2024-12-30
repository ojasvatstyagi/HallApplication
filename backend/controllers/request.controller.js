// controllers/request.controller.js
import Request from '../models/Request.js';

export const getRequestsForAdmin = async (req, res) => {
  try {
    const requests = await Request.find().populate('user_id hall_id');
    res.status(200).json(requests);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching requests', error });
  }
};

export const getRequestsForStaff = async (req, res) => {
  try {
    const requests = await Request.find().sort({ priority: -1 }).populate('user_id hall_id');
    res.status(200).json(requests);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching requests', error });
  }
};

export const addRequest = async (req, res) => {
  const { user_id, hall_id, request_for, request_timing, purpose } = req.body;
  try {
    const request = new Request({ user_id, hall_id, request_for, request_timing, purpose });
    await request.save();
    res.status(201).json({ message: 'Request added successfully', request });
  } catch (error) {
    res.status(500).json({ message: 'Error adding request', error });
  }
};

export const updateRequestStatus = async (req, res) => {
  const { request_id, status_admin, status_staff, comments } = req.body;
  try {
    const updateData = {};
    if (status_admin) updateData.status_admin = status_admin;
    if (status_staff) updateData.status_staff = status_staff;
    if (comments) updateData.comments = comments;

    const request = await Request.findByIdAndUpdate(request_id, updateData, { new: true });
    res.status(200).json({ message: 'Request updated successfully', request });
  } catch (error) {
    res.status(500).json({ message: 'Error updating request', error });
  }
};