const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 8080;
require('dotenv').config();
const swaggerDocument = require('./swagger.json');

const swaggerUi = require('swagger-ui-express');

// Parse JSON bodies (as sent by API clients)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const connection = require('./connector');

app.use('/api-docs', swaggerUi.serve);
app.get('/api-docs', swaggerUi.setup(swaggerDocument));
app.get('/api/orders', (req, res) => {
  const offset = +req.query.offset || 0;
  const limit = +req.query.limit || 10;
  // const queryString = `SELECT * FROM orders LIMIT ${offset}, ${limit}`;
  const queryString = `SELECT * FROM orders LIMIT ${offset}, ${limit}`;

  connection.query(queryString, (error, results, fields) => {
    if (error) {
      console.error('Error executing SELECT query:', error);
      res.status(500).send('Internal Server Error');
      return;
    }
    if (!results) res.status(404)
    res.status(200).json(results);
  });
});

app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;
