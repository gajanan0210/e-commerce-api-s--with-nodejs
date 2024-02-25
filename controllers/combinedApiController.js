const { fetchCombinedData } = require('../services/combinedApiService');

const getCombinedData = async (req, res) => {
  try {
    const combinedData = await fetchCombinedData();
    res.json(combinedData);
  } catch (error) {
    console.error('Error fetching combined data:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  getCombinedData,
};
