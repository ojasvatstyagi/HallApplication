import { Router } from 'express';
import { getRequestsForStaff, updateRequestStatus } from '../controllers/request.controller.js';

const router = Router();

// Route to get requests for staff (sorted by priority)
router.get('/requests', getRequestsForStaff);

// Route to update a request status
router.put('/requests/:id', updateRequestStatus);

export default router;