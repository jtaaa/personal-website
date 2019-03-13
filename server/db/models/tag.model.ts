import db from './../mongoose';
import { tagSchema } from './../schema/tag.schema';

const tagModel = db.model('tags', tagSchema);

export { tagModel };
