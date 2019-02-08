const Schema = require('mongoose').Schema;

const GeneralInfo = new Schema({
  description: {
    type: String,
    required: true,
  },
  infoPoints: {
    type: [{
      label: { type: String, default: '' },
      value: { type: String, default: '' },
    }],
  },
});

module.exports = GeneralInfo;
