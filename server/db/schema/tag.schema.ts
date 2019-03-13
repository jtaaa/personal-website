import { Schema } from 'mongoose';

const tagSchema = new Schema({
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
  color: {
    type: String,
    default: 'none',
    required: true,
  },
});

export { tagSchema };
