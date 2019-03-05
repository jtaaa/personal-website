import * as express from 'express';

import { SectionModel } from './../db';
import { ensureAdmin } from './../auth';

import { oneLine } from './../utils/templateLiteralTags';

const router = express.Router();

/* GET section
 *--> Returns all section documents in an array
 */
router.get('/', (req, res, next) => {
  SectionModel.find({})
    .lean()
    .exec()
    .then(projects => res.json(projects))
    .catch(err => {
      console.error(err);
      next(err);
    });
});

/* POST section
 *--> Create a new section document
 */
router.post('/', ensureAdmin(), (req, res, next) => {
  const project = req.body;
  SectionModel.create(project)
    .then(doc => res.json(doc.toObject()))
    .catch(err => {
      console.error(err);
      next(err);
    });
});

router.get('/:name', (req, res, next) => {
  let query = SectionModel.findOne({ name: req.params.name });
  if (req.query.populate) {
    query = query.populate({ path: 'subsections', options: { lean: true } });
  }
  query
    .lean()
    .exec()
    .then(doc => res.json(doc))
    .catch(err => {
      console.error(err);
      next(err);
    });
});

/* PUT section
 *--> Update existing or create a new section document
 */
router.put('/:name', ensureAdmin(), (req, res, next) => {
  const project = req.body;
  SectionModel.findOneAndUpdate({ name: req.params.name }, project)
    .setOptions({ upsert: true, new: true, setDefaultsOnInsert: true, runValidators: true })
    .lean()
    .exec()
    .then(doc => res.json(doc))
    .catch(err => {
      console.error(err);
      next(err);
    });
});

/* DELETE section
 *--> Delete a section document
 */
router.delete('/:name', ensureAdmin(), (req, res, next) => {
  SectionModel.deleteOne({ name: req.params.name })
    .exec()
    .then(({ n }) => n ?
        res.json({
          message: 'Successfully deleted my bro!'
        })
      : next({
          statusCode: 404,
          message: 'Couldn\'t find a record with that name my bro.',
        })
    )
    .catch(err => {
      console.error(err);
      next(err);
    });
});

router.put('/:name/subsections', ensureAdmin(), (req, res, next) => {
  const subsectionIds = req.body;
  SectionModel.findOneAndUpdate(
    { name: req.params.name },
    { $addToSet: { subsections: { $each: subsectionIds } } },
  )
    .setOptions({ new: true, runValidators: true })
    .lean()
    .exec()
    .then(doc => res.json(doc))
    .catch(err => {
      console.error(err);
      next(err);
    });
});

router.delete('/:name/subsections', ensureAdmin(), (req, res, next) => {
  const subsectionIds = req.body;
  SectionModel.update(
    { name: req.params.name },
    { $pullAll: { sections: subsectionIds }}
  )
    .exec()
    .then(({ n, nModified }) => {
      if (nModified) 
        res.json({
          message: 'Successfully deleted my bro!'
        });
      else if (n)
        next({
          statusCode: 404,
          message: oneLine`Couldn\'t find any projects on the ${req.params.name}
                           info doc with those ids my bro.`,
        })
      else next({
        statusCode: 404,
        message: 'Couldn\'t find a project with that name my bro.',
      });
    })
    .catch(err => {
      console.error(err);
      next(err);
    });
});

export default router;
