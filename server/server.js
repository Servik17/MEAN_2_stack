//Connect libs
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');
let servConf = require('./config').server;
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
app.listen(servConf.port, (err) => {
    if (err) {
        console.error(err);
    }
    console.log(`Server run ${servConf.host}:${servConf.port}`);
});