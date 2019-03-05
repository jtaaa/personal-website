import { Schema } from 'mongoose';

import { SubsectionModel } from './../../models/subsection.model';

const SectionSchema = new Schema({
  name: {
    type: String,
    index: true,
    unique: true,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  subsections: {
    type: [{
      type: Schema.Types.ObjectId,
      ref: 'subsection',
      validate: {
        validator: async _id => SubsectionModel.count({ _id }, count => count > 0),
        message: 'That\'s not a valid project id my dude',
        type: 'ForeignKeyError',
      },
    }],
    default: [],
    required: true,
  },
});

export default SectionSchema;
