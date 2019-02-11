import * as express from 'express';
import { passport } from './../auth';

const router = express.Router();

router.get('/google', passport.authenticate('google', { scope: ['profile'] }));

router.get('/google/callback', 
    passport.authenticate('google', { failureRedirect: '/pineapples' }),
    (req, res) => {
  console.log('authenticated');
  res.redirect('/');
});

export default router;
