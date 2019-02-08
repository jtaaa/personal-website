const express = require('express');

const InfoModel = require('./../db').InfoModel;

const router = express.Router();

/* GET info
 *--> Returns all info in an array
 */
router.get('/', (req, res, next) => {
  const query = InfoModel.find({}).lean();
  if (req.query.populate) {
    query.populate({ path: 'projects', options: { lean: true } });
  }
  query
    .exec()
    .then(infos => {
      res.json(infos);
    })
    .catch(err => {
      console.error(err);
      next(err);
    });
});

/* POST info
 *--> Create a new info document
 */
router.post('/', (req, res, next) => {
  const info = req.body;
  InfoModel.create(info)
    .then(doc => res.json(doc.toObject()))
    .catch(err => {
      console.error(err);
      next(err);
    });
});

module.exports = router;
