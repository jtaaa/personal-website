import db from './../mongoose';
import InfoSchema from './../schema/info/info.schema';

const InfoModel = db.model('info', InfoSchema);

export { InfoModel };
