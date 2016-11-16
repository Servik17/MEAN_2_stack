//Connect libs
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');
let app = express();

//Connect routes
let main = require('./routes/main');

//Config app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//Use static directory
app.use(express.static(path.join(__dirname, '../client')));

//Routes
app.use('/', main);

//Run server
app.listen(8800, () => console.log('Server run localhost:8800'));