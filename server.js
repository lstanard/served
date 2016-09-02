// set up =====================================================================
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var PORT = process.env.PORT || 3000;

// config =====================================================================
app.use(bodyParser.json());
app.use(express.static('public'));

// routes =====================================================================
app.use(require('./api/controllers/'));

// listen =====================================================================
app.listen(PORT, () => {
	console.log('Listening on port ' + PORT);
});
