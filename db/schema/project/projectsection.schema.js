const Schema = require('mongoose').Schema;

const ProjectSubSectionSchema = require('./projectsubsection.schema');

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

module.exports = ProjectSectionSchema;
