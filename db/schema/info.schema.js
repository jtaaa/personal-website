const Schema = require('mongoose').Schema;

const InfoSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
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
});

module.exports = InfoSchema;
