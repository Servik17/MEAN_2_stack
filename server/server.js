var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, '../client')));

app.get('/', (req, res) => {
    res.sendfile(path.join(__dirname, '../client/index.html'));
});

app.listen(8800, () => console.log('Server run localhost:8800'));