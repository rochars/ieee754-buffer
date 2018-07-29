/*
 * Copyright (c) 2018 Rafael da Silva Rocha.
 */

/**
 * @fileoverview rollup configuration file.
 * @see https://github.com/rochars/ieee754-buffer
 */

import closure from 'rollup-plugin-closure-compiler-js';
import fs from 'fs';

// Externs
const externsFile = fs.readFileSync('./externs/ieee754-buffer.js', 'utf8');

// Legal
const license = '/*!\n'+
' * Copyright (c) 2017-2018 Rafael da Silva Rocha.\n' +
' * Copyright (c) 2013 DeNA Co., Ltd.\n' +
' * Copyright (c) 2010, Linden Research, Inc\n' +
' *\n' +
' * Permission is hereby granted, free of charge, to any person obtaining\n' +
' * a copy of this software and associated documentation files (the\n' +
' * "Software"), to deal in the Software without restriction, including\n' +
' * without limitation the rights to use, copy, modify, merge, publish,\n' +
' * distribute, sublicense, and/or sell copies of the Software, and to\n' +
' * permit persons to whom the Software is furnished to do so, subject to\n' +
' * the following conditions:\n' +
' *\n' +
' * The above copyright notice and this permission notice shall be\n' +
' * included in all copies or substantial portions of the Software.\n' +
' *\n' +
' * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,\n' +
' * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\n' +
' * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND\n' +
' * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE\n' +
' * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION\n' +
' * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION\n' +
' * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n' +
' */\n';

// GCC UMD footer, compatible with old browsers, Node and AMD loaders
const footer = 
  "var ieee754Buffer=exports;" +
  "typeof module!=='undefined'?module.exports=exports :" +
  "typeof define==='function'&&define.amd?define(['exports'],exports) :" +
  "typeof global!=='undefined'?global.ieee754Buffer=exports:null;";

export default [
  // UMD, minified
  {
    input: 'ieee754-buffer.js',
    output: [
      {
        file: 'ieee754-buffer.umd.js',
        format: 'cjs',
        strict: false,
        banner: 'var exports=exports||{};'
      }
    ],
    plugins: [
      closure({
        languageIn: 'ECMASCRIPT6',
        languageOut: 'ECMASCRIPT5',
        compilationLevel: 'ADVANCED',
        warningLevel: 'VERBOSE',
        outputWrapper: license + '%output%' + footer,
        externs: [{src: externsFile + 'exports={};'}]
      })
    ]
  },
];
