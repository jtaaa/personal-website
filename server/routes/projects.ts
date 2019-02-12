import * as express from 'express';

import { ProjectModel } from './../db';
import { ensureAdmin } from './../auth';

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

export default router;
