import mysql from 'mysql2/promise';
const pool: mysql.Pool = mysql.createPool({
  host: 'xxxxxxxxxxxxxxx',
  user: 'root',
  password: 'xxxxxxxxxxxxxx',
  database: 'xxxxxxxxxxxxxxx'
});
export default pool