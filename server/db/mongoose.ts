import * as mongoose from 'mongoose';

import CONFIG from './../config';

mongoose.connect(`mongodb://${CONFIG.DB_USER}:${CONFIG.DB_PASS}@${CONFIG.DB_URI}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log(`Connected to ${CONFIG.DB_URI} as ${CONFIG.DB_USER}`);
});

export default db;
