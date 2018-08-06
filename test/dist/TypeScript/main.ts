/*
 * Copyright (c) 2018 Rafael da Silva Rocha.
 */

/**
 * @fileoverview TypeScript declaration tests.
 * @see https://github.com/rochars/ieee754-buffer
 */

import {IEEE754Buffer} from '../../../ieee754-buffer.js'

let packer = new IEEE754Buffer(8, 23)

let buffer = [];
packer.pack(buffer, 0, 3.1415927410);
console.log(buffer);

console.log(packer.unpack(buffer, 0));