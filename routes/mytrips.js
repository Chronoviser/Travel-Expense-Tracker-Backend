import express from 'express';
import { getMytrips, createTrip, updateTrip, deleteTrip } from '../controllers/mytrips.js';

const router = express.Router();

router.get('/', getMytrips);
router.post('/', createTrip);
router.patch('/:id', updateTrip);
router.delete('/:id', deleteTrip);

export default router;