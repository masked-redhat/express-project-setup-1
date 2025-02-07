import dotenv from "dotenv";
dotenv.config();

const APP = {
  HOST: process.env.HOST || "localhost",
  PORT: process.env.PORT || 3000,
  PUBLIC: "./" + "public", // change according to your folder name
};

// Mongodb as nosql db
const MONGODB = {
  CLIENT: "Mongo DB",
  URI: process.env.MONGO_DB_URI,
};

// Post gre sql database as sql db
const POSTGRESQL = {
  CLIENT: "Postgresql DB",
  HOST: process.env.PG_SERVER,
  USER: process.env.PG_USERNAME,
  PASS: process.env.PG_PASSWORD,
  DB: process.env.PG_DATABASE,
  DIALECT: "postgres", // according to sequelize docs (for pg db)
};

// change according to your desired databases
const NOSQL_DB = MONGODB;
const SQL_DB = POSTGRESQL;

const _env = {
  app: APP,
  db: {
    nosql: NOSQL_DB,
    sql: SQL_DB,
  },
};

export default _env;
