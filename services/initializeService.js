const axios = require('axios');
const connection = require('../config/db');
const mysql = require('mysql2/promise');
require('dotenv').config();


async function initializeDatabase() {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      port: process.env.DB_PORT
    });

    // Check if table exists
    const [tables] = await connection.query("SHOW TABLES LIKE 'products'");
    if (tables.length === 0) {
      const createTableQuery = `
        CREATE TABLE products (
          id INT PRIMARY KEY,
          title VARCHAR(255),
          price DECIMAL(10, 2),
          description TEXT,
          category VARCHAR(255),
          image VARCHAR(255),
          sold BOOLEAN,
          dateOfSale DATETIME
        )
      `;
      await connection.query(createTableQuery);

      // Fetch seed data from API
      const fetchSeedData = async () => {
        const response = await fetch('https://s3.amazonaws.com/roxiler.com/product_transaction.json');
        const data = await response.json();
        return data;
      };
      const seedData = await fetchSeedData();

      // Insert seed data into the table
      for (const item of seedData) {
        await connection.query('INSERT INTO products SET ?', item);
      }

      console.log('seed data inserted in database successfully.');
    } else {
      console.log('Database Initialized..');
    }

    await connection.end(); // Close the connection
  } catch (error) {
    console.error('Error initializing database:', error);
  }
}

module.exports = {
  initializeDatabase,
};
