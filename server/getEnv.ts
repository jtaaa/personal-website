import * as fs from 'fs';

const dotEnvExists = fs.existsSync('./dist/.env');
if (dotEnvExists) {
  console.log('getEnv.js: .env exists, probably running on development environment');
  process.exit();
}

// On Google Cloud Platform authentication is handled for us
import { Storage }  from '@google-cloud/storage';
const gcs = new Storage();

const bucketName = 'envvars.jallum.xyz';
console.log(`Downloading .env from bucket "${bucketName}"`);
gcs
  .bucket(bucketName)
  .file('.env')
  .download({ destination: './dist/.env' })
  .then(() => {
    console.info('getEnv.js: .env downloaded successfully');
  })
  .catch(e => {
    console.error(`getEnv.js: There was an error: ${JSON.stringify(e, undefined, 2)}`);
    process.exit(1);
  });
