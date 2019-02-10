import db from '../mongoose';
import SplashSchema from '../schema/splash.schema';

const SplashModel = db.model('splash', SplashSchema);

export { SplashModel };
