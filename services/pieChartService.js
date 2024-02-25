const pool = require('../config/db');

const getPieChartData = async (month) => {
  const query = `
    SELECT category, COUNT(*) AS itemCount
    FROM products
    WHERE MONTH(dateOfSale) = ?
    GROUP BY category;
  `;
  try {
    const [results] = await pool.query(query, [month]);
    return results || [];
  } catch (error) {
    console.error('Error executing query:', error);
    return [];
  }
};

module.exports = {
  getPieChartData,
};
