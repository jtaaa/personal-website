import db from './../mongoose';
import SectionSchema from './../schema/project/section.schema';

const SectionModel = db.model('section', SectionSchema);

export { SectionModel };
