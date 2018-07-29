/*
 * Copyright (c) 2018 Rafael da Silva Rocha.
 */

/**
 * @fileoverview TypeScript declaration tests.
 * @see https://github.com/rochars/ieee754-buffer
 */

import * as ieee754Buffer from '../../../ieee754-buffer.js'

let buffer = [];
ieee754Buffer.pack(buffer, 0, 3.1415927410, 8, 23);
console.log(buffer);

console.log(ieee754Buffer.unpack(buffer, 0, 8, 23));