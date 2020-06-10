const express = require('express');
const path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../client/build')));
app.use(express.json());

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname,'../client/public/index.html'));
});

const port = process.env.PORT || 8080;
app.listen(port);

console.log(`Server is listening on ${port}`);
