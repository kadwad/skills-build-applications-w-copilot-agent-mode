import { Router } from 'express';
import Workout from '../models/workout.js';

const router = Router();

router.get('/', async (req, res) => {
  const workouts = await Workout.find().lean();
  res.json({
    message: 'List of workouts',
    data: workouts,
  });
});

router.post('/', async (req, res) => {
  const workout = await Workout.create(req.body);
  res.status(201).json({
    message: 'Create a new workout',
    workout,
  });
});

export default router;
