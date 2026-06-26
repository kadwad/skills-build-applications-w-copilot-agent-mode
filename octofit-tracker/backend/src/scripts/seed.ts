import mongoose from 'mongoose';
import User from '../models/user.js';
import Team from '../models/team.js';
import Activity from '../models/activity.js';
import Leaderboard from '../models/leaderboard.js';
import Workout from '../models/workout.js';

/**
 * Seed the octofit_db database with test data
 */
async function seed() {
  const mongoUri = 'mongodb://127.0.0.1:27017/octofit_db';

  await mongoose.connect(mongoUri);
  console.log('Connected to MongoDB for seeding:', mongoUri);

  await Promise.all([
    User.deleteMany({}),
    Team.deleteMany({}),
    Activity.deleteMany({}),
    Leaderboard.deleteMany({}),
    Workout.deleteMany({}),
  ]);

  const teamA = await Team.create({
    name: 'OctoFit Warriors',
    description: 'A competitive team focused on endurance and strength.',
  });
  const teamB = await Team.create({
    name: 'Pulse Pioneers',
    description: 'A team for high-intensity interval training and community goals.',
  });

  const userAlice = await User.create({
    name: 'Alice Morgan',
    email: 'alice@example.com',
    role: 'member',
    teamId: teamA._id,
  });
  const userBen = await User.create({
    name: 'Ben Patel',
    email: 'ben@example.com',
    role: 'coach',
    teamId: teamA._id,
  });
  const userCara = await User.create({
    name: 'Cara Nguyen',
    email: 'cara@example.com',
    role: 'member',
    teamId: teamB._id,
  });

  teamA.members = [userAlice._id, userBen._id];
  teamB.members = [userCara._id];
  await teamA.save();
  await teamB.save();

  const workoutRun = await Workout.create({
    name: 'Morning Run',
    description: 'A 30-minute easy paced run to improve endurance.',
    durationMinutes: 30,
    intensity: 'medium',
  });
  const workoutStrength = await Workout.create({
    name: 'Strength Circuit',
    description: 'Full-body strength training with compound lifts.',
    durationMinutes: 45,
    intensity: 'high',
  });

  const activityA = await Activity.create({
    userId: userAlice._id,
    type: 'running',
    durationMinutes: 30,
    caloriesBurned: 280,
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
  });
  const activityB = await Activity.create({
    userId: userBen._id,
    type: 'weightlifting',
    durationMinutes: 50,
    caloriesBurned: 400,
    timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000),
  });
  const activityC = await Activity.create({
    userId: userCara._id,
    type: 'cycling',
    durationMinutes: 40,
    caloriesBurned: 360,
    timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000),
  });

  await Leaderboard.create({
    userId: userAlice._id,
    teamId: teamA._id,
    rank: 1,
    score: 1250,
    period: 'weekly',
  });
  await Leaderboard.create({
    userId: userBen._id,
    teamId: teamA._id,
    rank: 2,
    score: 1120,
    period: 'weekly',
  });
  await Leaderboard.create({
    userId: userCara._id,
    teamId: teamB._id,
    rank: 3,
    score: 980,
    period: 'weekly',
  });

  console.log('Inserted sample users, teams, activities, leaderboard entries, and workouts.');
  await mongoose.disconnect();
  console.log('Seed complete. Disconnected from MongoDB.');
}

seed().catch((error) => {
  console.error('Seed error:', error);
  process.exit(1);
});
