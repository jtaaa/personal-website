const db = require('./../mongoose');
const InfoSchema = require('./../schema/splash.schema');

const InfoModel = db.model('info', InfoSchema);

module.exports = InfoModel;
