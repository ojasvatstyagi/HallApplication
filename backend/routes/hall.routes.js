import { Router } from 'express';
import { getHalls } from '../controllers/hall.controller.js';
const router = Router();

router.get('/', getHalls);
export default router;