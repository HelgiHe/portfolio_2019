const express = require('express');
const path = require('path');

const app = express();

// const expressStaticGzip = require('express-static-gzip');
// app.use(expressStaticGzip(__dirname + '/dist'));

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const port = process.env.PORT || 8080;
app.listen(port);
console.log(`Server listengin on port ${port}`);
