# Zomato Orders API Service

This repository contains a Node.js and Express application connected to a MySQL database, serving as a backend service to fetch Zomato orders. The API provides functionality to retrieve a list of orders and supports pagination using query parameters like `offset` and `limit`.

## Project Structure

The project is organized as follows:

- **src**: Contains the source code for the application.
  - **index.js**: Main file for server configuration and API routing.
  - **connector.js**: File for configuring the MySQL database connection.
  - **createDatabase.js**: SQL queries to create tables and dummy data from data.js
  - **swagger.json**: JSON file for api documentation

## Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/vibhorgupta04/pagination-mysql.git
   ```

2. **Install Dependencies**

To install the necessary dependencies for the Zomato Orders API, navigate to the project directory in your terminal and run the following command:

```bash
cd pagination-mysql
npm install
```

3. **Configure Database Connection**

To configure the database connection for the Zomato Orders API, follow these steps:

1. Open the `src/connector.js` file in your preferred text editor.

2. Update the database connection details (host, user, password, database) based on your MySQL setup. Modify the following code accordingly:

   ```javascript
   // src/connector.js

   const mysql = require("mysql");

   const connection = mysql.createConnection({
     host: "your-mysql-host",
     user: "your-mysql-username",
     password: "your-mysql-password",
     database: "your-mysql-database",
   });

   module.exports = connection;
   ```

3. **Populating Database**

Run the script to populate your local db with the dummy data

```bash
npm run create_db
```

5. **Starting Server**

To start the server run the following command

```bash
npm run start
```

Serve will start on port 8080

## API Endpoints

### Fetch Zomato Orders

- **Endpoint:** `/api/orders`
- **Method:** `GET`
- **Description:** Fetches a list of Zomato orders.
- **Query Parameters:**
  - `offset` (optional): The starting index for pagination.
  - `limit` (optional): The number of records to fetch per page.
- **Response:**
  - `200 OK`: Successful response with a JSON array containing the list of orders.
  - `404 Not Found`: If no orders are found.
  - `500 Internal Server Error`: If there is an issue with the server.

## Example Usage:

- Fetch all orders:

```bash
GET http://localhost:8080/api/orders
```

- Fetch orders with pagination:

```bash
GET http://localhost:8080/api/orders?offset=0&limit=10
```

## Swagger Documentation

Explore the API using Swagger documentation available at:

```plaintext
http://localhost:8080/api-docs
```

## Deployment

This project is deployed on [Render](https://render.com/), and the database is hosted on a cloud service.

## Contributing

Feel free to contribute to the project by opening issues or submitting pull requests. Any improvements, bug fixes, or additional features are highly appreciated.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
