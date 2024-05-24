// const createBooksTable = async () => {
//   const queryText = `
//     CREATE TABLE books (
//       id SERIAL PRIMARY KEY,
//       name VARCHAR(255),
//       author VARCHAR(255),
//       image_url VARCHAR(255)
//     );
//   `;

//   try {
//     const res = await pool.query(queryText);
//     console.log('Table created successfully:', res);
//   } catch (err) {
//     console.error('Error creating table:', err.stack);
//   }
// };

// createBooksTable();
