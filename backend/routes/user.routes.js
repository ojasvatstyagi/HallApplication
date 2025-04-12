import { Router } from 'express';
import { createUser, getUserRequests } from '../controllers/user.controller.js';
import { addRequest } from '../controllers/request.controller.js';
import { getHalls } from '../controllers/hall.controller.js'; // Assuming users can view halls

const router = Router();

router.post('/register', createUser);
router.get('/requestlists', getUserRequests);
router.post('/requests', addRequest);
router.get('/halls', getHalls); // Route to view available halls

export default router;