const connection = require('../config/db');

const getTransactions = async (month, search, page, perPage) => {
  let query = 'SELECT * FROM products';
  let params = [];

  if (month) {
    query += ' WHERE MONTH(dateOfSale) = ?';
    params.push(month);
  }

  if (search) {
    query += `${month ? ' AND' : ' WHERE'} (title LIKE ? OR description LIKE ? OR price LIKE ?)`;
    params.push(`%${search}%`, `%${search}%`, `%${search}%`);
  }

  const offset = (page - 1) * perPage;
  query += ' LIMIT ? OFFSET ?';
  params.push(perPage, offset);

  const result = await connection.query(query, params);
  return result;
};

module.exports = {
  getTransactions,
};
