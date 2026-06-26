import { Router } from 'express';
import Leaderboard from '../models/leaderboard.js';

const router = Router();

router.get('/', async (req, res) => {
  const leaderboard = await Leaderboard.find()
    .populate('userId')
    .populate('teamId')
    .lean();

  res.json({
    message: 'Leaderboard entries',
    data: leaderboard,
  });
});

export default router;
