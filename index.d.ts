// Type definitions for ieee754-buffer 1.0.0
// Project: https://github.com/rochars/ieee754-buffer
// Definitions by: Rafael da Silva Rocha <https://github.com/rochars>
// Definitions: https://github.com/rochars/ieee754-buffer

export = IEEE754Buffer;

declare module IEEE754Buffer {

  class IEEE754Buffer {
    /**
     * Pack a IEEE 754 floating point number.
     * @param {number} ebits The exponent bits.
     * @param {number} fbits The fraction bits.
     */
    constructor(ebits, fbits);

    /**
     * Pack a IEEE 754 floating point number.
     * @param {!Uint8Array|!Array<number>} buffer The buffer.
     * @param {number} num The number.
     * @param {number} index The index to write on the buffer.
     * @return {number} The next index to write on the buffer.
     */
    pack(
      buffer: Uint8Array|number[],
      num: number,
      index: number): number;

    /**
     * Unpack a IEEE 754 floating point number.
     * @param {!Uint8Array|!Array<number>} buffer The buffer.
     * @param {number} index The index to read from the buffer.
     * @return {number} The floating point number.
     */
    unpack(
      buffer: Uint8Array|number[],
      index: number): number;
  }
}
