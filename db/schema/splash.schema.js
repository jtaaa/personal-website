const Schema = require('mongoose').Schema;

const SplashSchema = new Schema({
  title: {
    type: String,
    default: 'Untitled',
    required: true,
  },
  tags: {
    type: [{
      type: String,
    }],
    default: [ 'untagged' ],
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
  weight: {
    type: Number,
    min: [0, 'Too few eggs bro, also weight can\'t be negative'],
    max: [10, 'Bruh that\'s way too many eggs, chill my dude'],
    default: 1,
    required: true,
    index: true,
  },
  lifetime: {
    type: Number,
    default: 2592000000,
    min: [-1, 'You already can\'t have a negative lifetime but you wanna go lower'],
    max: [31536000000, 'That\'s kinda lazy bro, just make more when the lifetime runs out or turn them back on'],
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
    required: true,
  },
});

module.exports = SplashSchema;
