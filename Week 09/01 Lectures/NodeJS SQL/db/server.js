import pg from 'pg';
const { Pool } = pg;

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
});

const connectDB = async () => {
  try {
    await pool.connect();
    console.log('Conntected to ElephantSQL');
  } catch (error) {
    console.log('Connection error', error.stack);
  }
};

connectDB();

export default pool;
