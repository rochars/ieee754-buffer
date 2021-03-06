/*
 * Copyright (c) 2018-2019 Rafael da Silva Rocha.
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 */

/**
 * @fileoverview Externs for ieee754-buffer 1.0
 * @see https://github.com/rochars/ieee754-buffer
 * @externs
 */

/**
 * A class to write and read unsigned ints to and from byte buffers.
 */
var IEEE754Buffer = {};

/**
 * Pack a IEEE 754 floating point number.
 * @param {!Uint8Array|!Array<number>} buffer The buffer.
 * @param {number} num The number.
 * @param {number} index The index to write on the buffer.
 * @return {number} The next index to write on the buffer.
 */
IEEE754Buffer.prototype.pack = function(buffer, num, index=0) {};

/**
 * Unpack a IEEE 754 floating point number.
 * @param {!Uint8Array|!Array<number>} buffer The buffer.
 * @param {number} index The index to read from the buffer.
 * @return {number} The floating point number.
 */
IEEE754Buffer.prototype.unpack = function(buffer, index=0) {};
