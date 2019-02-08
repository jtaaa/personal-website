const db = require('./../mongoose');
const SplashSchema = require('./../schema/splash.schema');

const SplashModel = db.model('splash', SplashSchema);

module.exports = SplashModel;
