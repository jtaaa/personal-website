import * as express from 'express';

import { LogModel } from './../db';
import { ensureAdmin } from './../auth';
import { Parser } from './../utils/Parser';

const router = express.Router();

/* GET log
 *--> Returns last 50 log items in an array
 */
router.get('/', ensureAdmin(), (req, res, next) => {
  const limit = req.query.limit || 50;
  LogModel.find()
    .sort('-timestamp')
    .setOptions({ limit })
    .lean()
    .exec()
    .then(log => res.send(log))
    .catch(err => next(err));
});

/* PUT log
 *--> Adds a new log item
 */
router.put('/', ensureAdmin(), (req, res, next) => {
  let logitem = req.body;
  if (req.query.parse) {
    logitem.tags = Parser.getTags(logitem.input);
  }
  LogModel.create(logitem)
    .then(doc => res.json(doc.toObject()))
    .catch(err => {
      console.error(err);
      next(err);
    });
});

export default router;
