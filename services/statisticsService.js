const pool = require('../config/db');

const getStatistics = async (month) => {
  const query = `
    SELECT 
      SUM(IF(sold, price, 0)) AS totalSaleAmount,
      SUM(sold) AS totalSoldItems,
      SUM(NOT sold) AS totalNotSoldItems
    FROM products
    WHERE MONTH(dateOfSale) = ?;
  `;
  const results = await pool.query(query, [month]);
  if (results && results.length > 0) {
    return results[0];
  } else {
    return { totalSaleAmount: 0, totalSoldItems: 0, totalNotSoldItems: 0 };
  }
};

module.exports = {
  getStatistics,
};
