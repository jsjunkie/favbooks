var express = require('express');

var app = express();

app.use(express.static('client'));

app.listen('3000', () => console.log('Server 2 at 3000'));