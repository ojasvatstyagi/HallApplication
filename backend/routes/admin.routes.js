import { Router } from 'express';
import { addHall } from '../controllers/hall.controller.js'; // Assuming addHall might be moved here
import { getRequestsForAdmin, updateRequestStatus } from '../controllers/request.controller.js';
import { getBookings } from '../controllers/booking.controller.js';

const router = Router();

// Route to add a new hall
router.post('/halls', addHall);

// Route to get all requests (for admin)
router.get('/requests', getRequestsForAdmin);

// Route to update a request status
router.put('/requests/:id', updateRequestStatus);

router.get('/bookings', getBookings);

export default router;