import { Schema } from 'mongoose';

const logitemSchema = new Schema({
  input: {
    type: String,
    required: true,
  },
});

export { logitemSchema };
