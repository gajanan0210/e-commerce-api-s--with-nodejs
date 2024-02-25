const barChartService = require('../services/barChartService');

const getBarChartData = async (req, res) => {
  const { month } = req.query;
  const barChartData = await barChartService.getBarChartData(month);
  res.status(200).json(barChartData);
};

module.exports = {
  getBarChartData,
};
