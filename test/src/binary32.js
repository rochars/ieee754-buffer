/*
 * Copyright (c) 2018 Rafael da Silva Rocha.
 */

/**
 * @fileoverview Test IEEE-754 binary32 numbers.
 * @see https://github.com/rochars/ieee754-buffer
 * @see https://en.wikipedia.org/wiki/Single-precision_floating-point_format
 */

var ieee754Buffer = ieee754Buffer || require('../../test/loader.js');
var assert = assert || require('assert');

describe('Binary32 numbers', function() {     
    // Zeros
    it('pack 0', function() {
        var buffer = [];
        ieee754Buffer.pack(buffer, 0, 0, 8, 23);
        assert.deepEqual(buffer, [0,0,0,0]);
    });
    
    it('unpack 0', function() {
        assert.equal(ieee754Buffer.unpack([0,0,0,0], 0, 8, 23), 0);
    });
    
    it('pack -0', function() {
        var buffer = [];
        ieee754Buffer.pack(buffer, 0, -0, 8, 23);
        assert.deepEqual(buffer, [0,0,0,128]);
    });
    it('unpack -0', function() {
        assert.equal(ieee754Buffer.unpack([0,0,0,128], 0, 8, 23), -0);
    });

    // NaN
    it('pack NaN', function() {
        var buffer = [];
        ieee754Buffer.pack(buffer, 0, NaN, 8, 23);
        assert.deepEqual(
        	buffer, 
            [0,0,192,127]); // 0 0 0xc0 0x7f
    });
    it('unpack NaN', function() {
        assert.ok(isNaN(ieee754Buffer.unpack([0,0,192,127], 0, 8, 23)));
    });

    // Infinity
    it('pack Infinity', function() {
        var buffer = [];
        ieee754Buffer.pack(buffer, 0, Infinity, 8, 23);
        assert.deepEqual(
        	buffer, 
            [0x00,0x00,0x80,0x7f]); // 0x80 0xff 128 127
    });
    it('unpack Infinity', function() {
        assert.equal(
        	ieee754Buffer.unpack([0x00,0x00,0x80,0x7f], 0, 8, 23), 
            Infinity); // 0x80 0xff 128 127
    });
    it('pack -Infinity', function() {
        var buffer = [];
        ieee754Buffer.pack(buffer, 0, -Infinity, 8, 23);
        assert.deepEqual(
        	buffer, 
            [0x00,0x00,0x80,0xff]); // 0x80 0xff 128 255
    });
    it('unpack -Infinity', function() {
        assert.equal(
        	ieee754Buffer.unpack([0x00,0x00,0x80,0xff], 0, 8, 23), 
            -Infinity); // 0x80 0xff 128 255
    });
    
    // Pi
    it('pack pi as 3.1415927410', function() {
        var buffer = [];
        ieee754Buffer.pack(buffer, 0, 3.1415927410, 8, 23);
        assert.deepEqual(buffer,  [0xdb,0x0F,0x49,0x40]);
    });
    it('unpack pi as 3.1415927410', function() {
        assert.equal(ieee754Buffer.unpack([0xdb,0x0F,0x49,0x40], 0, 8, 23).toFixed(10), 
            '3.1415927410');
    });

    // Some random value
    it('pack 0.9', function() {
        var buffer = [];
        ieee754Buffer.pack(buffer, 0, 0.9, 8, 23);
        assert.deepEqual(
            buffer, 
            [0x66,0x66,0x66,0x3f]);
    });
    it('unpack 0.9', function() {
        assert.deepEqual(
            ieee754Buffer.unpack([0x66,0x66,0x66,0x3f], 0, 8, 23).toFixed(1), 
            '0.9');
    });

    // Exact representations
    // Integers in [-16777216, 16777216] can be exactly represented
    // Test 1, MIN, MAX
    it('pack 1', function() {
        var buffer = [];
        ieee754Buffer.pack(buffer, 0, 1, 8, 23);
        assert.deepEqual(
        	buffer, 
            [0x00,0x00,0x80,0x3f]);
    });
    it('unpack 1', function() {
        assert.equal(
        	ieee754Buffer.unpack([0x00,0x00,0x80,0x3f], 0, 8, 23), 
            1);
    });
    it('pack -16777216 (min exact)', function() {
        var buffer = [];
        ieee754Buffer.pack(buffer, 0, -16777216, 8, 23);
        assert.deepEqual(
        	buffer, 
            [0x00,0x00,0x80,0xcb]);
    });
    it('unpack -16777216 (min exact)', function() {
        assert.equal(
        	ieee754Buffer.unpack([0x00,0x00,0x80,0xcb], 0, 8, 23), 
            -16777216);
    });
    it('pack 16777216 (max exact)', function() {
        var buffer = [];
        ieee754Buffer.pack(buffer, 0, 16777216, 8, 23);
        assert.deepEqual(
        	buffer, 
            [0x00,0x00,0x80,0x4b]);
    });
    it('unpack 16777216 (max exact)', function() {
        assert.equal(
        	ieee754Buffer.unpack([0x00,0x00,0x80,0x4b], 0, 8, 23), 
            16777216);
    });

    // Rounding
    it('pack 0.000000001', function() {
        var buffer = [];
        ieee754Buffer.pack(buffer, 0, 0.000000001, 8, 23);
        assert.deepEqual(
            buffer, 
            [0x5f,0x70,0x89,0x30]);
    });
    it('unpack 0.000000001', function() {
        assert.deepEqual(
        	ieee754Buffer.unpack([0x5f,0x70,0x89,0x30], 0, 8, 23).toFixed(9),
            '0.000000001');
    });
    it('pack -0.000000001', function() {
        var buffer = [];
        ieee754Buffer.pack(buffer, 0, -0.000000001, 8, 23);
        assert.deepEqual(
            buffer, 
            [0x5f,0x70,0x89,0xb0]);
    });
    it('unpack -0.000000001', function() {
        assert.equal(
        	ieee754Buffer.unpack([0x5f,0x70,0x89,0xb0], 0, 8, 23).toFixed(9),
            '-0.000000001');
    });
    it('pack 214748364.7', function() {
        // struct.pack('f', 214748364.7) == '\xcd\xcc\x4c\x4d'
        var buffer = [];
        ieee754Buffer.pack(buffer, 0, 214748364.7, 8, 23);
        assert.deepEqual(
            buffer, 
            [205,204,76,77]);
    });
    it('unpack 214748364.7', function() {
        // struct.unpack('f', b'\xcd\xcc\x4c\x4d') == 214748368.0
        assert.deepEqual(
            ieee754Buffer.unpack([205,204,76,77], 0, 8, 23).toFixed(1), 
            '214748368.0');
    });
    it('pack 21474.83647', function() {
        // struct.pack('f', 21474.83647) == '\xac\xc5\xa7\x46'
        var buffer = [];
        ieee754Buffer.pack(buffer, 0, 21474.83647, 8, 23);
        assert.deepEqual(
            buffer, 
            [0xac,0xc5,0xa7,0x46]);
    });
    it('unpack 21474.83647', function() {
        // struct.unpack('f', b'\xac\xc5\xa7\x46') == 21474.8359375
        assert.deepEqual(
            ieee754Buffer.unpack([0xac,0xc5,0xa7,0x46], 0, 8, 23).toFixed(7),
            '21474.8359375');
    });
    it('pack 214.7483647', function() {
        // struct.pack('f', 214.7483647) == b'\x95\xbf\x56\x43'
        var buffer = [];
        ieee754Buffer.pack(buffer, 0, 214.7483647, 8, 23);
        assert.deepEqual(
            buffer, 
            [0x95,0xbf,0x56,0x43]);
    });
    it('unpack 214.7483647', function() {
        // struct.unpack('f', b'\x95\xbf\x56\x43') == 214.7483673095703
        assert.deepEqual(
            ieee754Buffer.unpack([0x95,0xbf,0x56,0x43], 0, 8, 23).toFixed(13), 
            '214.7483673095703');
    });
});
