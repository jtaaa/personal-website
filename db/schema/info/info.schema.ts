import { Schema } from 'mongoose';

import GeneralInfoSchema from './generalinfo.schema';

const InfoSchema = new Schema({
  name: {
    type: String,
    index: true,
    unique: true,
    required: true,
  },
  title: {
    type: String,
    unique: true,
    required: true,
  },
  logo: {
    type: {
      src: { type: String, required: true },
      alt: { type: String, required: true },
    },
    required: true,
  },
  href: {
    type: String,
  },
  generalInfo: {
    type: GeneralInfoSchema,
    required: true,
  },
  projects: {
    type: [{
      type: Schema.Types.ObjectId,
      ref: 'project',
    }],
    default: [],
    required: true,
  },
  enabled: {
    type: Boolean,
    default: false,
    required: true,
  },
});

export default InfoSchema;
