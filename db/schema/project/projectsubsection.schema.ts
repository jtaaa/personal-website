import { Schema } from 'mongoose';

const ProjectSubSectionSchema = new Schema({
  name: {
    type: String,
    index: true,
    unique: true,
    required: true,
  },
  type: {
    type: String,
    enum: [
      'paragraph',
      'breakdown',
      'rundown',
      'summary',
      'breakdown of de rundown',
      'summary of de breakdown of the rundown',
    ],
    required: true,
  },
  contents: {
    type: [ String ],
  },
  logo: {
    type: {
      src: { type: String, required: true },
      alt: { type: String, required: true },
    },
  },
});

export default ProjectSubSectionSchema;
