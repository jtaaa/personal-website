import { Schema } from 'mongoose';

import GeneralInfoSchema from './generalinfo.schema';
import { ProjectModel } from './../../models/project.model';

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
      validate: {
        validator: async _id => ProjectModel.count({ _id }, count => count > 0),
        message: 'That\'s not a valid project id my dude',
        type: 'ForeignKeyError',
      },
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

InfoSchema.path('projects').validate(() => {},)

export default InfoSchema;
