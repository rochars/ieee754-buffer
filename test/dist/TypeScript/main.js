"use strict";
/*
 * Copyright (c) 2018 Rafael da Silva Rocha.
 */
exports.__esModule = true;
/**
 * @fileoverview TypeScript declaration tests.
 * @see https://github.com/rochars/ieee754-buffer
 */
var ieee754_buffer_js_1 = require("../../../ieee754-buffer.js");
var packer = new ieee754_buffer_js_1.IEEE754Buffer(8, 23);
var buffer = [];
packer.pack(buffer, 3.1415927410, 0);
console.log(buffer);
console.log(packer.unpack(buffer, 0));
