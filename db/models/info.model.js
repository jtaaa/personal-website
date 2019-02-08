const db = require('./../mongoose');
const InfoSchema = require('./../schema/info/info.schema');

const InfoModel = db.model('info', InfoSchema);

module.exports = InfoModel;
