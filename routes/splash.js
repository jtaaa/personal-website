const express = require('express');

const SplashModel = require('../db').SplashModel;

const router = express.Router();

/* GET splash
 *--> Returns a random splash based on weight
 */
router.get('/', (req, res, next) => {
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
router.post('/', (req, res, next) => {
  const splash = req.body;
  SplashModel.create(splash)
    .then(doc => res.json(doc.toObject()))
    .catch(err => {
      console.error(err);
      next(err);
    });
});

/* DELETE splash
 *--> Delete a splash
 */
router.delete('/:id', (req, res, next) => {
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

module.exports = router;