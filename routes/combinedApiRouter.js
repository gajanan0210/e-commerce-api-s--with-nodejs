const express = require('express');
const router = express.Router();
const { getCombinedData } = require('../controllers/combinedApiController');

router.get('/combined-data', getCombinedData);

module.exports = router;
