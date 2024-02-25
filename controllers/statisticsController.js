const statisticsService = require('../services/statisticsService');

const getStatistics = async (req, res) => {
  const { month } = req.query;
  const statistics = await statisticsService.getStatistics(month);
  res.status(200).json(statistics);
};

module.exports = {
  getStatistics,
};
