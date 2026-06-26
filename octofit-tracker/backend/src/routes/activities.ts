import { Router } from 'express';
import Activity from '../models/activity.js';

const router = Router();

router.get('/', async (req, res) => {
  const activities = await Activity.find().populate('userId').lean();
  res.json({
    message: 'List of activities',
    data: activities,
  });
});

router.post('/', async (req, res) => {
  const activity = await Activity.create(req.body);
  res.status(201).json({
    message: 'Create a new activity',
    activity,
  });
});

export default router;
