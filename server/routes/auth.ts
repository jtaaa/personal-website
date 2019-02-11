import * as express from 'express';
import { passport } from './../auth';

const router = express.Router();

router.get('/google',
    passport.authenticate('google', { scope: ['profile'] }),
    (req, res, next) => {
  res.send(req);
});

router.get('/google/callback', 
    passport.authenticate('google', { failureRedirect: '/pineapples' }),
    (req, res) => {
  console.log('authenticated');
  res.redirect('/grapes');
});

export default router;
