import db from './../mongoose';
import { logitemSchema } from './../schema/logitem.schema';

const LogModel = db.model('logs', logitemSchema);

export { LogModel };
