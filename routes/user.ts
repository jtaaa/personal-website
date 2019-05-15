import * as express from 'express';

import { ensureLoggedIn, passport } from './../auth';

const router = express.Router();

/* GET user
 *--> Returns the user information of the currently logged in user
 */
router.get('/', ensureLoggedIn(), (req, res, next) => {
  res.json(req.user);
});

export default router;
