require('dotenv').config();
const options = {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
  poolSize: 10,
  bufferMaxEntries: 0,
}

const { DB_HOST, DB_PORT, DB_NAME, mongoDBurl } = process.env;


// const dbConnectionURL = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`;
const dbConnectionURL = mongoDBurl;


const serverURL = 'http://localhost:3001';

module.exports = {
  dbConnectionURL,
  options,
  serverURL,
}
