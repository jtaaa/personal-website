import * as express from 'express';

import { SubsectionModel } from './../db';
import { ensureAdmin } from './../auth';

const router = express.Router();

/* GET subsection
 *--> Returns all subsection documents in an array
 */
router.get('/', (req, res, next) => {
  SubsectionModel.find({})
    .lean()
    .exec()
    .then(projects => res.json(projects))
    .catch(err => {
      console.error(err);
      next(err);
    });
});

/* POST subsection
 *--> Create a new subsection document
 */
router.post('/', ensureAdmin(), (req, res, next) => {
  const project = req.body;
  SubsectionModel.create(project)
    .then(doc => res.json(doc.toObject()))
    .catch(err => {
      console.error(err);
      next(err);
    });
});

/* PUT subsection
 *--> Update existing or create a new subsection document
 */
router.put('/:name', ensureAdmin(), (req, res, next) => {
  const project = req.body;
  SubsectionModel.findOneAndUpdate({ name: req.params.name }, project)
    .setOptions({ upsert: true, new: true })
    .lean()
    .exec()
    .then(doc => res.json(doc))
    .catch(err => {
      console.error(err);
      next(err);
    });
});

/* DELETE subsection
 *--> Delete a subsection document
 */
router.delete('/:name', ensureAdmin(), (req, res, next) => {
  SubsectionModel.deleteOne({ name: req.params.name })
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