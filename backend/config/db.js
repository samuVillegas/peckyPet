const { Pool } = require('pg');

const pool = new Pool({
  host: '34.86.58.133',
  user: 'postgres',
  password: 'lkimLACBni4b0HOy',
  database: 'db',
  port: 5432
});

module.exports = {pool};