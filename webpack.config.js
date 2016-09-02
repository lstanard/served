var path = require('path');

module.exports = {
	entry: {
		"main": "./public/assets/src/js/main.js"
	},
	output: {
		path: __dirname + '/public/assets/build/js/',
		filename: "[name].entry.js"
	}
};
