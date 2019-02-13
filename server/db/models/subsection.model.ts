import db from './../mongoose';
import SubsectionSchema from './../schema/project/Subsection.schema';

const SubsectionModel = db.model('subsection', SubsectionSchema);

export { SubsectionModel };
