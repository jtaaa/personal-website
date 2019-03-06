import { Schema } from 'mongoose';

const logitemSchema = new Schema({
  input: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
    required: true,
  },
});

export { logitemSchema };
