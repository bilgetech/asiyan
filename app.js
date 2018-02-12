const deployd = require('deployd');
const dotenv = require('dotenv');

dotenv.config();

const port = process.env.PORT || 3000;
const db = {
  port: process.env.DB_PORT || 27017,
  host: process.env.DB_HOST || '127.0.0.1',
  name: process.env.DB_NAME,
  credentials: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
  },
};
const env = process.env.ENV;

const dpd = deployd({ port, db, env });

dpd.listen();

dpd.on('listening', () => {
  console.log('Server is listening');
});

dpd.on('error', (err) => {
  console.error(err);
  process.nextTick(() => {
    // Give the server a chance to return an error
    process.exit();
  });
});
