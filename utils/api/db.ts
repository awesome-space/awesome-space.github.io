import mysql from "mysql2/promise";
import Long from "long";

const pool: mysql.Pool = mysql.createPool({
  supportBigNumbers: true,
  bigNumberStrings: true,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

export default pool;
