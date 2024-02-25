const pool = require('../config/db');

const getBarChartData = async (month) => {
  const query = `
    SELECT 
      CASE
        WHEN price >= 0 AND price <= 100 THEN '0-100'
        WHEN price >= 101 AND price <= 200 THEN '101-200'
        WHEN price >= 201 AND price <= 300 THEN '201-300'
        WHEN price >= 301 AND price <= 400 THEN '301-400'
        WHEN price >= 401 AND price <= 500 THEN '401-500'
        WHEN price >= 501 AND price <= 600 THEN '501-600'
        WHEN price >= 601 AND price <= 700 THEN '601-700'
        WHEN price >= 701 AND price <= 800 THEN '701-800'
        WHEN price >= 801 AND price <= 900 THEN '801-900'
        ELSE '901-above'
      END AS priceRange,
      COUNT(*) AS itemCount
    FROM products
    WHERE MONTH(dateOfSale) = ?
    GROUP BY priceRange
    ORDER BY priceRange;
  `;
  const results = await pool.query(query, [month]);
  return results[0];
};

module.exports = {
  getBarChartData,
};
