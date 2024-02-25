const express = require('express');
const statisticsController = require('../controllers/statisticsController');

const router = express.Router();

router.get('/statistics', statisticsController.getStatistics);

module.exports = router;
