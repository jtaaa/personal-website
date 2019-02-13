import * as express from 'express';

import { ProjectModel } from './../db';
import { ensureAdmin } from './../auth';

import { oneLine } from './../utils/templateLiteralTags';

const router = express.Router();

/* GET project
 *--> Returns all project documents in an array
 */
router.get('/', (req, res, next) => {
  ProjectModel.find({})
    .lean()
    .exec()
    .then(projects => res.json(projects))
    .catch(err => {
      console.error(err);
      next(err);
    });
});

/* POST project
 *--> Create a new project document
 */
router.post('/', ensureAdmin(), (req, res, next) => {
  const project = req.body;
  ProjectModel.create(project)
    .then(doc => res.json(doc.toObject()))
    .catch(err => {
      console.error(err);
      next(err);
    });
});

router.get('/:name', (req, res, next) => {
  const query = ProjectModel.findOne({ name: req.params.name });
  switch (req.query.populate) {
    case 'true':
    case  true :
      query.populate({ path: 'sections', options: { lean: true } });
    case 'all':
      query.populate({
        path: 'sections',
        options: { lean: true },
        populate: { path: 'subsections', options: { lean: true }}
      });
    default:
  }
  if (req.query.populate) {
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

/* PUT project
 *--> Update existing or create a new project document
 */
router.put('/:name', ensureAdmin(), (req, res, next) => {
  const project = req.body;
  ProjectModel.findOneAndUpdate({ name: req.params.name }, project)
    .setOptions({ upsert: true, new: true })
    .lean()
    .exec()
    .then(doc => res.json(doc))
    .catch(err => {
      console.error(err);
      next(err);
    });
});

/* DELETE project
 *--> Delete an project document
 */
router.delete('/:name', ensureAdmin(), (req, res, next) => {
  ProjectModel.deleteOne({ name: req.params.name })
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

router.put('/:name/sections', ensureAdmin(), (req, res, next) => {
  const sectionIds = req.body;
  ProjectModel.findOneAndUpdate(
    { name: req.params.name },
    { $addToSet: { sections: { $each: sectionIds } } },
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

router.delete('/:name/sections', ensureAdmin(), (req, res, next) => {
  const sectionIds = req.body;
  ProjectModel.update(
    { name: req.params.name },
    { $pullAll: { sections: sectionIds }}
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
