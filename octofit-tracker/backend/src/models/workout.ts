import { Schema, model } from 'mongoose';

const workoutSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, default: '' },
  durationMinutes: { type: Number, required: true },
  intensity: { type: String, required: true, enum: ['low', 'medium', 'high'] },
  createdAt: { type: Date, default: () => new Date() },
});

export default model('Workout', workoutSchema);
