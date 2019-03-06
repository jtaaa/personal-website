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
  tags: {
    type: [{
      tag: {
        type: String,
        required: true,
      },
      references: {
        type: [{
          ref: {
            type: Schema.Types.ObjectId,
            required: true,
          },
          type: {
            type: String,
            required: true,
          },
        }],
        default: [],
        required: true,
      },
    }],
    default: [],
    required: true,
  }
});

export { logitemSchema };
