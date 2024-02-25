# ROXILER SYSTEM - TASK

This project implements APIs to manage transactions and generate statistics, bar charts, and pie charts based on the transaction data. It also includes an API to combine data from multiple APIs.

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/roxiler-system-task.git

### Install dependencies:


    
        cd roxiler-system-task

        npm install

Create a .env file in the root directory with the following content, replacing the placeholders with your MySQL database credentials:


DB_HOST=your_database_host
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_DATABASE=your_database_name
DB_PORT=your_database_port

#### Run the project:


    npm start
Access the APIs:

Transactions API: http://localhost:3000/api/transactions

Statistics API: http://localhost:3000/api/statistics

Bar Chart API: http://localhost:3000/api/bar-chart

Pie Chart API: http://localhost:3000/api/pie-chart

Combined API: http://localhost:3000/api/combined

#### Task Description
Initialize Database: The project includes a service to initialize the database by creating a products table and inserting seed data fetched from a third-party API.

Transactions API: List all transactions based on search parameters and pagination.

Statistics API: Calculate and return statistics such as total sales, average price, etc., based on the transaction data.

Bar Chart API: Generate a bar chart showing the price range and the number of items in that range for the selected month.

Pie Chart API: Generate a pie chart showing the distribution of sales across different categories for the selected month.

Combined API: Fetch data from multiple APIs, combine the responses, and send a final combined JSON response.

#### Libraries Used
    Express.js: Web framework for Node.js
    MySQL: MySQL database driver
    dotenv: Load environment variables from a .env file
    fetch: HTTP client for fetching data from third-party APIs
   
