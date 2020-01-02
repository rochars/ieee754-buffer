/*
 * Copyright (c) 2018 Rafael da Silva Rocha.
 */

/**
 * @fileoverview Test IEEE-754 binary32 numbers.
 * @see https://github.com/rochars/ieee754-buffer
 * @see https://en.wikipedia.org/wiki/Single-precision_floating-point_format
 */

var ieee754 = require('../../test/loader.js');
var assert = assert || require('assert');

describe('Input errors', function() {

    let ieee = new ieee754.IEEE754Buffer(8, 23);

    // throw error if input is not a number
    it('pack false should raise a TypeError', function() {
        assert.throws(
            function() {
                var buffer = [];
                ieee.pack(buffer, false);
            },
            TypeError);
    });
    it('pack true should raise a TypeError', function() {
        assert.throws(
            function() {
                var buffer = [];
                ieee.pack(buffer, true);
            },
            TypeError);
    });
    it('pack null should raise a TypeError', function() {
        assert.throws(
            function() {
                var buffer = [];
                ieee.pack(buffer, null);
            },
            TypeError);
    });
    it('pack undefined should raise a TypeError', function() {
        assert.throws(
            function() {
                var buffer = [];
                ieee.pack(buffer, undefined);
            },
            TypeError);
    });
    it('pack string should raise a TypeError', function() {
        assert.throws(
            function() {
                var buffer = [];
                ieee.pack(buffer, 'c');
            },
            TypeError);
    });
    it('pack number string should raise a TypeError', function() {
        assert.throws(
            function() {
                var buffer = [];
                ieee.pack(buffer, '1');
            },
            TypeError);
    });
});
