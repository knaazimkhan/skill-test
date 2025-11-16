const { Pool } = require("pg");
const { env } = require("./env");

const db = new Pool({
  connectionString: env.DATABASE_URL,
});

db.connect()
  .then((client) => {
    console.log('Database connected successfully');
    client.release();
  })
  .catch((err) => {
    console.error('Database connection failed:', err);
    process.exit(1);
  });

module.exports = { db };
