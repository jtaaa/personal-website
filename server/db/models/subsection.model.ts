import db from './../mongoose';
import SubsectionSchema from './../schema/project/subsection.schema';

const SubsectionModel = db.model('subsection', SubsectionSchema);

export { SubsectionModel };
