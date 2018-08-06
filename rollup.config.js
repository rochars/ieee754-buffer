/*
 * Copyright (c) 2018 Rafael da Silva Rocha.
 */

/**
 * @fileoverview rollup configuration file.
 * @see https://github.com/rochars/ieee754-buffer
 */

import babel from 'rollup-plugin-babel';
import fs from 'fs';

const head = ";(function (global, factory) {" +
  "typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :" +
  "typeof define === 'function' && define.amd ? define(factory) :" +
  "(global.IEEE754Buffer = factory());" +
"}(this, (function () {";
const foot = "return IEEE754Buffer;})));"

export default [
  {
    input: 'ieee754-buffer.js',
    output: [
      {
        file: 'ieee754-buffer.umd.js',
        name: 'IEEE754Buffer',
        format: 'iife',
        strict: false,
        banner: head,
        footer: foot
      }
    ],
    plugins: [
      babel()
    ]
  },
];
