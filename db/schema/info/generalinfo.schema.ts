import { Schema } from 'mongoose';

const GeneralInfo = new Schema({
  description: {
    type: String,
    required: true,
  },
  infoPoints: {
    type: [{
      label: { type: String, default: '' },
      value: { type: String, default: '' },
    }],
  },
});

export default GeneralInfo;
