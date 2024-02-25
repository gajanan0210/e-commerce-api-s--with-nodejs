const express = require('express');
const barChartController = require('../controllers/barChartController');

const router = express.Router();

router.get('/bar-chart', barChartController.getBarChartData);

module.exports = router;
