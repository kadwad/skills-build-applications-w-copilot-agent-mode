import { Schema, model } from 'mongoose';

const teamSchema = new Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String, default: '' },
  members: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  createdAt: { type: Date, default: () => new Date() },
});

export default model('Team', teamSchema);
