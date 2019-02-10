import * as express from 'express';
import * as passport from 'passport';
import { OAuth2Strategy as GoogleStategy } from 'passport-google-oauth';

passport.use(new GoogleStategy({
    clientID: '',
    clientSecret: 'GOOGLE_CLIENT_SECRET',
    callbackURL: '/api/auth/google/callback'
  },
  (accessToken, refreshToken, profile, done) => {

  }
));

const router = express.Router();

export default router;
