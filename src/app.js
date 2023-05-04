const express = require('express');
const path = require('path');

const app = express();

const PORT = 7777;
const HOST = 'localhost';

app.listen(PORT, HOST, () => {
  console.log('server start working...');
});


app.use('/dist', express.static(__dirname + '/../dist'));
app.use('/src/style', express.static(__dirname + '/style'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/view/index.html'));
});



