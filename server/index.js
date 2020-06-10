const express = require('express');
const path = require('path');

const DB_URL = process.env.DATABASE_URL || 'postgres://supckmwsmhvobj:4127f1f61e84d15be5c42a44bc05cf5657ec20b43827d3de887ec45ccc601746@ec2-107-21-94-185.compute-1.amazonaws.com:5432/d1dli91qqnmgqg';

const { Pool } = require('pg');
const pool = new Pool({
  connectionString: DB_URL,
  ssl: true
});

const generatePassword = require('password-generator');

const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(express.json());

// Put all API endpoints under '/api'
app.get('/api/passwords', (req, res) => {
  const count = 5;

  // Generate some passwords
  const passwords = Array.from(Array(count).keys()).map(i =>
    generatePassword(12, false)
  )

  // Return them as json
  res.json(passwords);

  console.log(`Sent ${count} passwords`);
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 8080;
app.listen(port);

console.log(`Server is listening on ${port}`);
