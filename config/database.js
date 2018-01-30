var apiPort = process.env.API_PORT ? process.env.API_PORT : 3000;

var dbConn = process.env.DB_CONN ? process.env.DB_CONN : "mongodb://127.0.0.1:27017/sampleform";

var authUrl = process.env.AUTH_URL ? process.env.AUTH_URL : "http://localhost:3000";



module.exports = {
  apiPort: apiPort,
  dbConn : dbConn,
  authUrl : authUrl
}