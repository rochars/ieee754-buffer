// Type definitions for ieee754-buffer 0.0.1
// Project: https://github.com/rochars/ieee754-buffer
// Definitions by: Rafael da Silva Rocha <https://github.com/rochars>
// Definitions: https://github.com/rochars/ieee754-buffer

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
export function pack(
	buffer: Uint8Array|number[],
	index: number,
	num: number,
	ebits: number,
	fbits: number): number;

/**
 * Unpack a IEEE754 floating point number.
 * Derived from IEEE754 by DeNA Co., Ltd., MIT License. 
 * Adapted to handle NaN. Should port the solution to the original repo.
 * @see https://github.com/kazuho/ieee754.js/blob/master/ieee754.js
 * @param {!Uint8Array|!Array<number>} buffer The byte buffer to unpack.
 * @param {number} index the start index to read.
 * @param {number} ebits The number of bits of the exponent.
 * @param {number} fbits The number of bits of the fraction.
 */
export function unpack(
	buffer: Uint8Array|number[],
	index: number,
	ebits: number,
	fbits: number): number;
