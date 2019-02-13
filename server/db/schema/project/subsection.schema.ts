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
