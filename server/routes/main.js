let express = require('express');
let path = require('path');
let router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.sendfile(path.join(__dirname, '../../client/index.html'));
});

module.exports = router;
