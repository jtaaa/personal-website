import * as express from 'express';

import { SplashModel } from './../db';
import { ensureAdmin } from './../auth';

const router = express.Router();

/* GET splash
 *--> Returns a random splash based on weight
 */
router.get('/', function(req, res, next) {
  const rand1 = Math.random();
  SplashModel.find({ weight: { $gt: rand1 } })
    .select(['dateAdded', 'weight', 'value'])
    .sort({ weight: 'asc'})
    .lean()
    .exec()
    .then(splashs => {
      if (!splashs.length) {
        return next(new Error('No splashes with baseline weight in the database!'));
      }

      let splashMap = [];
      let totalWeight = 0;
      splashs.forEach((splash, index) => {
        for (let i = 0; i < splash.weight; i++) splashMap.push(index);
        totalWeight += splash.weight;
      });

      const rand2 = Math.random() * totalWeight;
      res.json(splashs[splashMap[Math.floor(rand2)]].value);
    })
    .catch(err => {
      console.error(err);
      next(err);
    });;
});

/* POST splash
 *--> Create a new splash
 */
router.post('/', ensureAdmin(), function(req, res, next) {
  const splash = req.body;
  SplashModel.create(splash)
    .then(doc => {
      res.json(doc);
    })
    .catch(err => {
      console.error(err);
      next(err);
    });
});

/* PUT info
 *--> Update existing or create a new splash
 */
router.put('/:id', ensureAdmin(), (req, res, next) => {
  const info = req.body;
  SplashModel.findOneAndUpdate({ _id: req.params.id }, info)
    .setOptions({ new: true })
    .lean()
    .exec()
    .then(doc => doc ?
        res.json(doc)
      : next({
          statusCode: 404,
          message: 'Couldn\'t find a record with that id my bro.'
        })
    )
    .catch(err => {
      if (err.name === 'CastError') {
        next({
          statusCode: 404,
          message: 'Couldn\'t find a record with that id my bro.'
        });
      } else {
        console.error(err);
        next(err);
      }
    });
});

/* DELETE splash
 *--> Delete a splash
 */
router.delete('/:id', ensureAdmin(), (req, res, next) => {
  SplashModel.deleteOne({ _id: req.params.id })
    .exec()
    .then(({ n }) => n ?
        res.json({
          message: 'Successfully deleted my bro!'
        })
      : next({
          statusCode: 404,
          message: 'Couldn\'t find a record with that name my bro',
        })
    )
    .catch(err => {
      console.error(err);
      next(err);
    });
});

export default router;
