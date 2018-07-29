"use strict";
/*
 * Copyright (c) 2018 Rafael da Silva Rocha.
 */
exports.__esModule = true;
/**
 * @fileoverview TypeScript declaration tests.
 * @see https://github.com/rochars/ieee754-buffer
 */
var ieee754Buffer = require("../../../ieee754-buffer.js");
var buffer = [];
ieee754Buffer.pack(buffer, 0, 3.1415927410, 8, 23);
console.log(buffer);
console.log(ieee754Buffer.unpack(buffer, 0, 8, 23));
