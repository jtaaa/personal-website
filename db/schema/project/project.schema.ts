import { Schema } from 'mongoose';

import { SectionModel } from './../../models/section.model';

const ProjectSchema = new Schema({
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
  tags: {
    type: [{
      type: String,
    }],
    default: [ 'untagged' ],
    required: true,
  },
  href: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
  logo: {
    type: {
      src: { type: String, required: true },
      alt: { type: String, required: true },
    },
  },
  sections: {
    type: [{
      type: Schema.Types.ObjectId,
      ref: 'section',
      validate: {
        validator: async _id => SectionModel.count({ _id }, count => count > 0),
        message: 'That\'s not a valid project id my dude',
        type: 'ForeignKeyError',
      },
    }],
    default: [],
    required: true,
  }
});

export default ProjectSchema;
