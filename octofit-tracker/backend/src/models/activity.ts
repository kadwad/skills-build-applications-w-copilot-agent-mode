import { Schema, model } from 'mongoose';

const activitySchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  type: { type: String, required: true },
  durationMinutes: { type: Number, required: true },
  caloriesBurned: { type: Number, required: true },
  timestamp: { type: Date, default: () => new Date() },
});

export default model('Activity', activitySchema);
