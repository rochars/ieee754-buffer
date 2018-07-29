/**
 * Copyright (c) 2018 Rafael da Silva Rocha.
 * https://github.com/rochars/ieee754-buffer
 *
 */

let utf8Buffer;

// UMD bundle
if (process.argv[3] == '--umd') {
	console.log('umd tests');
	utf8Buffer = require('../ieee754-buffer.umd.js');

// Source
} else {
	require = require("esm")(module);
	global.module = module;
	console.log('Source tests');
	utf8Buffer = require('../ieee754-buffer.js');
}

module.exports = utf8Buffer;
