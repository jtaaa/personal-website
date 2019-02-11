import { Schema } from 'mongoose';

const UserSchema = new Schema({
  googleId: {
    type: Number,
    index: true,
    unique: true,
    required: true,
  },
  displayName: {
    type: String,
    required: true,
  },
  roles: {
    type: [ String ],
    default: [],
    required: true,
  },
  dateAdded: {
    type: Date,
    default: Date.now,
    required: true,
  },
});

export default UserSchema;
