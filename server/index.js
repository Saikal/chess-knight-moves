const express = require('express');
const path = require('path');

const DB_URL = process.env.DATABASE_URL;
const { Pool } = require('pg');
const pool = new Pool({
  connectionString: DB_URL,
  ssl: true
});

const app = express();

const Handler = require('./handlers.js');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../client/build')));
app.use(express.json());

app.post('/move', async (req, res) => {

  try {
    let convertedAlgebaic = Handler.convertFromAlgebraic(req.body['location']);
    if (!convertedAlgebaic) {
      throw new Error('Not Algebraic');
    } else {
      /* 
        START DB Postgres POST request knight:

        const client = await pool.connect();
        const result = await client.query('INSERT INTO knight(user, move) VALUES(' + `'${req.body['user']}'` + ',' + `'${req.body['location']}'`);
      */
      let results = {};

      let firstMove = Handler.knightMoves(convertedAlgebaic);
      let firstSet = new Set();
      Handler.populateSet(firstSet,  firstMove);

      results['moves_first'] = Array.from(firstSet);
      let secondSet = new Set();
      for (const pos of firstMove) { Handler.populateSet(secondSet, Handler.knightMoves(pos)); }
      results['moves_second'] = Array.from(secondSet);

      res.send(results);
      /*
        END DB Postgres POST request knight:

        client.release();
      */
    }
  } catch (err) {
    res.send(null);
    throw err;
  }
});


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname,'../client/public/index.html'));
});

const port = process.env.PORT || 8080;
app.listen(port);

console.log(`Server is listening on ${port}`);
