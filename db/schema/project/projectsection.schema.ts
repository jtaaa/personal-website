import { Schema } from 'mongoose';

import ProjectSubSectionSchema from './projectsubsection.schema';

const ProjectSectionSchema = new Schema({
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
    type: [ ProjectSubSectionSchema ],
    default: [],
    required: true,
  },
});

export default ProjectSectionSchema;
