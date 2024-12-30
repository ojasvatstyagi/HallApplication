// routes/request.routes.js
import express from 'express';
import { getRequestsForAdmin, getRequestsForStaff, addRequest, updateRequestStatus } from '../controllers/request.controller.js';
const router = express.Router();

router.get('/admin', getRequestsForAdmin);
router.get('/staff', getRequestsForStaff);
router.post('/', addRequest);
router.put('/', updateRequestStatus);

export default router;