/*
 * Copyright (c) 2018 Rafael da Silva Rocha.
 */

/**
 * @fileoverview Test IEEE-754 binary16 numbers.
 * @see https://github.com/rochars/ieee754-buffer
 * @see https://en.wikipedia.org/wiki/Half-precision_floating-point_format
 */
if (typeof window !== 'undefined') { //IE6
var assert = assert || require('assert');

describe('Binary16 numbers', function() {     

    var ieee = new IEEE754Buffer.IEEE754Buffer(5, 11);

    // Zeros
    it('pack 0', function() {
        var buffer = [];
        ieee.pack(buffer, 0, 0);
        assert.deepEqual(
        	buffer, 
            [0,0]);
    });
    it('unpack 0', function() {
        assert.equal(
        	ieee.unpack([0,0], 0), 
            0);
    });
    it('pack -0', function() {
        var buffer = [];
        ieee.pack(buffer, -0, 0);
        assert.deepEqual(
        	buffer, 
            [0,128]);
    });
    it('unpack -0', function() {
        assert.equal(
        	ieee.unpack([0,128],  0), 
            -0);
    });

    it('pack 1e-25', function() {
        var buffer = [];
        ieee.pack(buffer, 1e-25, 0);
        assert.deepEqual(
            buffer, 
            [0,0]);
    });
    it('unpack 0', function() {
        assert.equal(
            ieee.unpack([0,0],  0), 
            0);
    });

    // NaN
    it('pack NaN', function() {
        var buffer = [];
        ieee.pack(buffer, NaN, 0);
        assert.deepEqual(
            buffer, 
            [0, 126]); // Python struct.pack('e', math.nan)
    });
    it('unpack NaN', function() {
        assert.ok(isNaN(ieee.unpack([0, 126],  0)));
    });

    // Infinity
    it('pack Infinity', function() {
        var buffer = [];
        ieee.pack(buffer, Infinity, 0);
        assert.deepEqual(
        	buffer, 
            [0, 124]); // Python struct.pack('e', math.inf)
    });
    it('unpack Infinity', function() {
        assert.equal(
        	ieee.unpack([0, 124],  0), 
            Infinity);
    });
    it('pack -Infinity', function() {
        var buffer = [];
        ieee.pack(buffer, -Infinity, 0);
        assert.deepEqual(
        	buffer, 
            [0x00, 0xfc]); // Python struct.pack('e', -math.inf)
    });
    it('unpack -Infinity', function() {
        assert.equal(
        	ieee.unpack([0x00, 0xfc],  0), 
            -Infinity);
    });
    // round to Infinity
    it('round 65520 to Infinity when packing', function() {
        var buffer = [];
        ieee.pack(buffer, 65520, 0);
        assert.deepEqual(
            buffer, 
            [0, 124]);
    });
    it('round 65520+ to Infinity when packing', function() {
        var buffer = [];
        ieee.pack(buffer, 65521, 0);
        assert.deepEqual(
            buffer, 
            [0, 124]);
    });

    // Pi
    it('pack pi as 3.14159', function() {
        var buffer = [];
        ieee.pack(buffer, 3.14159, 0);
        assert.deepEqual(buffer, 
            [0x48,0x42]); // Python struct.pack('e', 3.14159)
    });
    it('unpack pi as 3.140625', function() {
        // Use toFixed(6) here to avoid JS rounding differences with Python.
        // Python struct.pack is used to check the data in most of the tests
        assert.equal(ieee.unpack([0x48,0x42],  0).toFixed(6), 
            '3.140625');
    });
    
    // Exact representations
    // Test 1, MIN, MAX
    it('pack 1', function() {
        var buffer = [];
        ieee.pack(buffer, 1, 0);
        assert.deepEqual(
        	buffer, 
            [0x00,0x3c]);
    });
    it('unpack 1', function() {
        assert.equal(
        	ieee.unpack([0x00,0x3c],  0), 
            1);
    });
    it('pack -2048 (min exact)', function() {
        var buffer = [];
        ieee.pack(buffer, -2048, 0);
        assert.deepEqual(
        	buffer, 
            [0x00,0xe8]);
    });
    it('unpack -2048 (min exact)', function() {
        assert.equal(
        	ieee.unpack([0x00,0xe8],  0), 
            -2048);
    });
    it('pack 2048 (max exact)', function() {
        var buffer = [];
        ieee.pack(buffer, 2048, 0);
        assert.deepEqual(
        	buffer, 
            [0x00,0x68]);
    });
    it('unpack 2048 (max exact)', function() {
        assert.equal(
        	ieee.unpack([0x00,0x68],  0), 
            2048);
    });
    
    // Rounding
    it('pack 2049 like it pack 2048', function() {
        var buffer = [];
        ieee.pack(buffer, 2049, 0);
        assert.deepEqual(
            buffer, 
            [0x00,0x68]);
    });
    it('pack 2050', function() {
        var buffer = [];
        ieee.pack(buffer, 2050, 0);
        assert.deepEqual(
            buffer, 
            [0x01,0x68]);
    });
    it('unpack 2050', function() {
        assert.deepEqual(
            ieee.unpack([0x01,0x68],  0), 
            2050);
    });
    it('pack 2051 like it pack 2050', function() {
        var buffer = [];
        ieee.pack(buffer, 2051, 0);
        assert.deepEqual(
            buffer, 
            [0x01,0x68]);
    });
});
}