const Schema = require('mongoose').Schema;

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
});

module.exports = ProjectSchema;
