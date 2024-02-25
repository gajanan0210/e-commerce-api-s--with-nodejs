const express = require('express');
const router = express.Router();
const pieChartService = require('../services/pieChartService');

router.get('/pie-chart', async (req, res) => {
  try {
    const { month } = req.query;
    const pieChartData = await pieChartService.getPieChartData(month);
    res.json(pieChartData);
  } catch (error) {
    console.error('Error fetching pie chart data:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
