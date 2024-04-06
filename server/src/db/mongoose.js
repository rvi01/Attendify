const mongoose = require("mongoose");
const dotenv = require('dotenv')
const path = require("path")

const envFilePath = path.resolve(__dirname,"../../.env")

dotenv.config({path: envFilePath})

const dbProtocol = process.env.DB_PROTOCOL
const dbHost = process.env.DB_HOST
const dbPort = process.env.DB_PORT
const dbName = process.env.DB_NAME

const dbConnectionString = `${dbProtocol}://${dbHost}:${dbPort}/${dbName}`;
console.log("dbConnectionString =>",dbConnectionString)

mongoose.connect(dbConnectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>{
  console.log("Connected to the database")
}).catch((error)=>{
  console.log("Error connecting to the database: ",error)
})