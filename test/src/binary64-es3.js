/*
 * Copyright (c) 2018 Rafael da Silva Rocha.
 */

/**
 * @fileoverview Test IEEE-754 binary64 numbers.
 * @see https://github.com/rochars/ieee754-buffer
 * @see https://en.wikipedia.org/wiki/Double-precision_floating-point_format
 */
if (typeof window !== 'undefined') { //IE6
var ieee = ieee754Buffer;
var assert = assert || require('assert');

describe('Binary64 numbers', function() {     
    // Zeros
    it('pack 0', function() {
        var buffer = [];
        ieee.pack(buffer, 0, 0, 11, 52);
        assert.deepEqual(
        	buffer, 
            [0,0,0,0,0,0,0,0]);
    });
    
    it('unpack 0', function() {
        assert.equal(
        	ieee.unpack([0,0,0,0,0,0,0,0], 0, 11, 52), 
            0);
    });
    
    it('pack -0', function() {
        var buffer = [];
        ieee.pack(buffer, 0, -0, 11, 52);
        assert.deepEqual(
        	buffer, 
            [0,0,0,0,0,0,0,128]);
    });
    it('unpack -0', function() {
        assert.equal(
        	ieee.unpack([0,0,0,0,0,0,0,128], 0, 11, 52), 
            -0);
    });
    
    // NaN
    it('pack NaN', function() {
        var buffer = [];
        ieee.pack(buffer, 0, NaN, 11, 52);
        assert.deepEqual(
            buffer, 
            [0x00,0x00,0x00,0x00,0x00,0x00,0xf8,0x7f]);
    });
    it('unpack NaN (quiet)', function() {
        assert.ok(isNaN(ieee.unpack(
            [0x00,0x00,0x00,0x00,0x00,0x00,0xf8,0x7f], 0, 11, 52)));
    });
    it('unpack NaN (signaling)', function() {
        assert.ok(isNaN(ieee.unpack(
            [0xff,0xff,0xff,0xff,0xff,0xff,0xff,0x7f], 0, 11, 52)));
    });

    // Infinity
    it('pack Infinity', function() {
        // Python struct.pack('d', math.inf)
        var buffer = [];
        ieee.pack(buffer, 0, Infinity, 11, 52);
        assert.deepEqual(
        	buffer, 
            [0x00,0x00,0x00,0x00,0x00,0x00,0xf0,0x7f]);
    });
    it('unpack Infinity', function() {
        assert.equal(
        	ieee.unpack([0x00,0x00,0x00,0x00,0x00,0x00,0xf0,0x7f], 0, 11, 52), 
            Infinity);
    });
    it('pack -Infinity', function() {
        // Python struct.pack('d', -math.inf)
        var buffer = [];
        ieee.pack(buffer, 0, -Infinity, 11, 52);
        assert.deepEqual(
        	buffer, 
            [0x00,0x00,0x00,0x00,0x00,0x00,0xf0,0xff]);
    });
    it('unpack -Infinity', function() {
        assert.equal(
        	ieee.unpack([0x00,0x00,0x00,0x00,0x00,0x00,0xf0,0xff], 0, 11, 52), 
            -Infinity);
    });
    
    // Pi
    it('pack pi as 3.1415926535897931', function() {
        var buffer = [];
        ieee.pack(buffer, 0, 3.1415926535897931, 11, 52);
        assert.deepEqual(
            buffer, 
            [0x18,0x2d,0x44,0x54,0xfb,0x21,0x09,0x40]);
    });
    it('unpack pi as 3.1415926535897931', function() {
        assert.equal(
            ieee.unpack([0x18,0x2d,0x44,0x54,0xfb,0x21,0x09,0x40], 0, 11, 52).toFixed(15), 
            '3.141592653589793');
    });
    
    // struct.unpack('d', b'\xd9\x7d\xda\xf5\xd0\xf2\xbe\x3a')
    it('pack 1e-25', function() {
        var buffer = [];
        ieee.pack(buffer, 0, 1e-25, 11, 52);
        assert.deepEqual(
            buffer,
            [0xd9,0x7d,0xda,0xf5,0xd0,0xf2,0xbe,0x3a]);
    });
    it('unpack 1e-25', function() {
        assert.equal(
            ieee.unpack([0xd9,0x7d,0xda,0xf5,0xd0,0xf2,0xbe,0x3a], 0, 11, 52),
            1e-25);
    });

    // Random values
    it('pack -1', function() {
        var buffer = [];
        ieee.pack(buffer, 0, -1, 11, 52);
        assert.deepEqual(
            buffer,
            [0,0,0,0,0,0,240,191]);
    });
    it('pack -0.5', function() {
        var buffer = [];
        ieee.pack(buffer, 0, -0.5, 11, 52, 16);
        assert.deepEqual(
            buffer,
            [0,0,0,0,0,0,224,191]);
    });
    it('pack 0.5', function() {
        var buffer = [];
        ieee.pack(buffer, 0, 0.5, 11, 52);
        assert.deepEqual(
            buffer,
            [0,0,0,0,0,0,224,63]);
    });
    it('pack 9', function() {
        var buffer = [];
        ieee.pack(buffer, 0, 9, 11, 52);
        assert.deepEqual(
            buffer,
            [0,0,0,0,0,0,34,64]);
    });
    it('pack 31.41592653589793', function() {
        var buffer = [];
        ieee.pack(buffer, 0, 31.41592653589793, 11, 52);
        assert.deepEqual(
            buffer,
            [94,56,85,41,122,106,63,64]);
    });
    it('pack 314159265358979.3', function() {
        // struct.pack() == b'\x35\x48\xa2\x76\x9e\xdb\xf1\x42'
        var buffer = [];
        ieee.pack(buffer, 0, 314159265358979.3, 11, 52);
        assert.deepEqual(
            buffer,
            //[53,72,162,118,158,219,241,66]);
            [0x35,0x48,0xa2,0x76,0x9e,0xdb,0xf1,0x42]);
    });
    it('unpack 314159265358979.3', function() {
        assert.deepEqual(
            ieee.unpack([0x35,0x48,0xa2,0x76,0x9e,0xdb,0xf1,0x42], 0, 11, 52),
            314159265358979.3);
    });
    it('pack 0', function() {
        var buffer = [];
        ieee.pack(buffer, 0, 0, 11, 52);
        assert.deepEqual(
            buffer,
            [0,0,0,0,0,0,0,0]);
    });
    it('pack 2', function() {
        var buffer = [];
        ieee.pack(buffer, 0, 2, 11, 52);
        assert.deepEqual(
            buffer,
            [0,0,0,0,0,0,0,64]);
    });
});
}