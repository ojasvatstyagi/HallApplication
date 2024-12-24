import { Router } from 'express';
import { createUser, getUserRequests } from '../controllers/user.controller';
const router = Router();

router.post('/register', createUser);
router.get('/requestlists', getUserRequests);

export default router;