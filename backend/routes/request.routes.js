// routes/request.routes.js
import express from 'express';
const { getRequestsForAdmin, getRequestsForStaff, addRequest, updateRequestStatus } = require('../controllers/request.controller');
const router = express.Router();

router.get('/admin', getRequestsForAdmin);
router.get('/staff', getRequestsForStaff);
router.post('/', addRequest);
router.put('/', updateRequestStatus);

export default router;