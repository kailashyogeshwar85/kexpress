require('dotenv').config();

const Config = {
  KSQLDB_API_BASE_URL: process.env.KSQLDB_REST_ENDPOINT,
  MONGODB_URI: process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/ksqlexpress",
}

module.exports = Config;