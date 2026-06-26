import { Router } from 'express';
import Team from '../models/team.js';

const router = Router();

router.get('/', async (req, res) => {
  const teams = await Team.find().populate('members').lean();
  res.json({
    message: 'List of teams',
    data: teams,
  });
});

router.post('/', async (req, res) => {
  const team = await Team.create(req.body);
  res.status(201).json({
    message: 'Create a new team',
    team,
  });
});

export default router;
