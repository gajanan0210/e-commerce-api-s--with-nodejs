const transactionService = require('../services/transactionService');

const listTransactions = async (req, res) => {
  try {
    const { month, search, page = 1, perPage = 10 } = req.query;
    const transactions = await transactionService.getTransactions(month, search, page, perPage);
    
    let formattedTransactions = [];
    if (Array.isArray(transactions)) {
      formattedTransactions = transactions.map(transaction => ({
        id: transaction.id,
        title: transaction.title,
        price: transaction.price,
        description: transaction.description,
        category: transaction.category,
        image: transaction.image,
        sold: transaction.sold,
        dateOfSale: transaction.dateOfSale
      }));
    }
    
    res.status(200).json(formattedTransactions);
  } catch (error) {
    console.error('Error fetching transactions:', error);
    res.status(500).send('Internal server error');
  }
};

module.exports = {
  listTransactions,
};
