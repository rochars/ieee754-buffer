/**
 * Copyright (c) 2018 Rafael da Silva Rocha.
 * https://github.com/rochars/ieee754-buffer
 *
 */

let ieee754Buffer;

// UMD bundle
if (process.argv[3] == '--umd') {
	console.log('umd tests');
	ieee754Buffer = require('../ieee754-buffer.umd.js');

// Source
} else {
	require = require("esm")(module);
	global.module = module;
	console.log('Source tests');
	ieee754Buffer = require('../ieee754-buffer.js');
}

module.exports = ieee754Buffer;
