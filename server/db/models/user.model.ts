import db from '../mongoose';
import UserSchema from './../schema/user.schema';

const UserModel = db.model('user', UserSchema);

export { UserModel };
