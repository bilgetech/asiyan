#!/usr/bin/env node

process.chdir(__dirname);

const deployd = require('deployd');
const dotenv = require('dotenv');
const program = require('commander');

program
  .version('0.1.3')
  .option('-e, --dotenv <file>', 'Path to your .env file')
  .parse(process.argv);

const dotenvOpts = {};

if (program.dotenv) {
  dotenvOpts.path = program.dotenv;
}

dotenv.config(dotenvOpts);

const port = process.env.PORT || 3434;
const db = {
  port: process.env.DB_PORT || 27017,
  host: process.env.DB_HOST || '127.0.0.1',
  name: process.env.DB_NAME,
  credentials: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
  },
};
const env = process.env.ENV || 'production';

const dpd = deployd({ port, db, env });

dpd.listen();

dpd.on('listening', () => {
  console.log('Server is listening on port: ', port);
});

dpd.on('error', (err) => {
  console.error(err);
  process.nextTick(() => {
    // Give the server a chance to return an error
    process.exit();
  });
});
