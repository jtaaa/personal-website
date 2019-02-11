import * as passport from 'passport';
import { OAuth2Strategy as GoogleStategy } from 'passport-google-oauth';

import CONFIG from '../config';

passport.use(new GoogleStategy(
  {
    clientID: CONFIG.GOOGLE_OAUTH_CLIENT_ID,
    clientSecret: CONFIG.GOOGLE_OAUTH_CLIENT_SECRET,
    callbackURL: '/api/auth/google/callback',
  },
  (accessToken, refreshToken, profile, done) => {
    console.log(profile);
    return done(null, profile);
  }
));

export { passport };
