const express = require('express');
const transactionRouter = require('./routes/transactionRouter');
const statisticsRouter = require('./routes/statisticsRouter');
const pieChartRouter = require('./routes/pieChartRouter');
const combinedApiRouter = require('./routes/combinedApiRouter');
const initializeService = require('./services/initializeService');
const barChartRouter = require('./routes/barChartRouter');
require('dotenv').config();


const connection = require('./config/db');

const app = express();
const port = 3000;

// Initialize the database when the connection is established
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }

  console.log('Connected to database');
  initializeService.initializeDatabase()
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error('Error initializing database:', error);
    });
});

app.use('/api', transactionRouter);
app.use('/api', statisticsRouter);
app.use('/api', barChartRouter);
app.use('/api', pieChartRouter);
app.use('/api', combinedApiRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
