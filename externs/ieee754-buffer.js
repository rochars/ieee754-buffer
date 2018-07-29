/*
 * Copyright (c) 2018 Rafael da Silva Rocha.
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
 * @fileoverview Externs for ieee754-buffer 0.0.1
 * @see https://github.com/rochars/ieee754-buffer
 * @externs
 */

/**
 * Pack a IEEE754 floating point number.
 * Derived from typedarray.js by Linden Research, MIT License.
 * @see https://bitbucket.org/lindenlab/llsd/raw/7d2646cd3f9b4c806e73aebc4b32bd81e4047fdc/js/typedarray.js
 * @param {!Uint8Array|!Array<number>} buffer The buffer.
 * @param {number} index The index to write on the buffer.
 * @param {number} num The number.
 * @param {number} ebits The number of bits of the exponent.
 * @param {number} fbits The number of bits of the fraction.
 * @return {number} The next index to write on the buffer.
 */
function pack(buffer, index, num, ebits, fbits) {}

/**
 * Unpack a IEEE754 floating point number.
 * Derived from IEEE754 by DeNA Co., Ltd., MIT License. 
 * Adapted to handle NaN. Should port the solution to the original repo.
 * @see https://github.com/kazuho/ieee754.js/blob/master/ieee754.js
 * @param {!Uint8Array|!Array<number>} buffer The byte buffer to unpack.
 * @param {number} index the start index to read.
 * @param {number} ebits The number of bits of the exponent.
 * @param {number} fbits The number of bits of the fraction.
 * @return {number} The floating point number.
 */
function unpack(buffer, index, ebits, fbits) {}
