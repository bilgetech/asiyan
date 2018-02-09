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
  env: process.env.ENV,
};

const dpd = deployd({ port, db });

dpd.listen();
