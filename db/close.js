import mongoose from "mongoose";
import { db } from "./connect.js";
import _env from "../constants/env.js";

const closeNoSqlConnection = () => {
  try {
    mongoose.connection.close();

    console.log(`Connected to ${_env.db.nosql.CLIENT}`);
  } catch (err) {
    console.log(err);
    console.log(`Failed to close ${_env.db.nosql.CLIENT}`);
  }
};

const closeSqlConnection = () => {
  try {
    db.close();

    console.log(`Closed ${_env.db.sql.CLIENT}`);
  } catch (err) {
    console.log(err);
    console.log(`Failed to close ${_env.db.sql.CLIENT}`);
  }
};

const _close = {
  nosql: closeNoSqlConnection,
  sql: closeSqlConnection,
};

export default _close;
