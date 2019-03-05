import * as express from 'express';

import { LogModel } from './../db';
import { ensureAdmin } from './../auth';

const router = express.Router();

/* GET log
 *--> Returns last 50 log items in an array
 */
router.get('/', ensureAdmin(), (req, res, next) => {
  const limit = req.query.limit || 50;
  LogModel.find()
    .setOptions({ limit })
    .lean()
    .exec()
    .then(log => res.send(log))
    .catch(err => next(err));
});

export default router;
