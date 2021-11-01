const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  user: 'samuel',
  password: 'Samu1732@',
  database: 'peckypetdb',
  port: 5432
});

module.exports = {pool};