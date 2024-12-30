import { Router } from 'express';
import { getHalls, addHall } from '../controllers/hall.controller.js';
const router = Router();

router.get('/', getHalls);
router.post('/', addHall);

export default router;