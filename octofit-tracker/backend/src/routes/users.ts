import { Router } from 'express';
import User from '../models/user.js';

const router = Router();

router.get('/', async (req, res) => {
  const users = await User.find().lean();
  res.json({
    message: 'List of users',
    data: users,
  });
});

router.post('/', async (req, res) => {
  const user = await User.create(req.body);
  res.status(201).json({
    message: 'Create a new user',
    user,
  });
});

export default router;
