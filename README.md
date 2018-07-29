# ieee754-buffer
Copyright (c) 2018 Rafael da Silva Rocha.  
Copyright (c) 2013 DeNA Co., Ltd.  
Copyright (c) 2010, Linden Research, Inc  
https://github.com/rochars/ieee754-buffer

[![NPM version](https://img.shields.io/npm/v/ieee754-buffer.svg?style=for-the-badge)](https://www.npmjs.com/package/ieee754-buffer) [![Docs](https://img.shields.io/badge/docs-online-blue.svg?style=for-the-badge)](https://rochars.github.io/ieee754-buffer/docs/index.html) [![Tests](https://img.shields.io/badge/tests-online-blue.svg?style=for-the-badge)](https://rochars.github.io/ieee754-buffer/test/dist/browser.html)  
[![Codecov](https://img.shields.io/codecov/c/github/rochars/ieee754-buffer.svg?style=flat-square)](https://codecov.io/gh/rochars/ieee754-buffer) [![Unix Build](https://img.shields.io/travis/rochars/ieee754-buffer.svg?style=flat-square)](https://travis-ci.org/rochars/ieee754-buffer) [![Windows Build](https://img.shields.io/appveyor/ci/rochars/ieee754-buffer.svg?style=flat-square&logo=appveyor)](https://ci.appveyor.com/project/rochars/ieee754-buffer) [![Scrutinizer](https://img.shields.io/scrutinizer/g/rochars/ieee754-buffer.svg?style=flat-square&logo=scrutinizer)](https://scrutinizer-ci.com/g/rochars/ieee754-buffer/)

**ieee754-buffer** is a ES6 module to encode and decode IEEE 754 floats without typed arrays.

- **MIT licensed**
- **Use it out of the box in the browser**
- **Use it out of the box in Node.js**
- **Can be used with arrays and typed arrays**
- **Compatible with IE8+**
- **Include TypeScript declaration file**
- **Tested with 16-bit, 32-bit and 64-bit floats**
- **Tested against Python's struct module**

## Install
```
npm install ieee754-buffer
```

## Use

### Node
If you installed via [NPM](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com), **import ieee754Buffer from ieee754-buffer**:
```javascript
import * as ieee754Buffer from 'ieee754-buffer';
let buffer = Uint8Array(4);
ieee754Buffer.pack(buffer, 0, 3.1415927410, 8, 23);
console.log(buffer);
```

Or **import** just what you need:
```javascript
import {pack, unpack} from 'ieee754-buffer';
let buffer = []; // Use arrays or typed arrays
pack(buffer, 0, 3.1415927410, 8, 23)
console.log(buffer);
```

Or **require**:
```javascript
const ieee754Buffer = require('ieee754-buffer');
```

### Browser
Use **ieee754-buffer.umd.js** in the */dist* folder of this package:
```html
<script src="./dist/ieee754-buffer.umd.js"></script>
<script>
	var buffer = [];
	ieee754Buffer.pack(buffer, 0, 3.1415927410, 8, 23);
	console.log(buffer);
</script>
```

Or load it from the [jsDelivr](https://cdn.jsdelivr.net/npm/ieee754-buffer) CDN:
```html
<script src="https://cdn.jsdelivr.net/npm/ieee754-buffer"></script>
```

Or load it from [unpkg](https://unpkg.com/ieee754-buffer):
```html
<script src="https://unpkg.com/ieee754-buffer"></script>
```

## About
- **Overflows** are rounded towards **Infinity** and **-Infinity**.
- **NaN** is packed as quiet NaN. Both **quiet NaN** and **signaling NaN** can be unpacked.
- Support packing and unpacking **zero** and **negative zero**.
- Support packing and unpacking **Infinity** and **negative Infinity**
- **always little endian**, use [byte-data](https://www.github.com/rochars/byte-data) for a endianness-independent interface of this lib

## API
```javascript
/**
 * Pack a IEEE 754 floating point number.
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
 * Unpack a IEEE 754 floating point number.
 * Derived from IEEE754 by DeNA Co., Ltd., MIT License. 
 * Adapted to handle NaN. Should port the solution to the original repo.
 * @see https://github.com/kazuho/ieee754.js/blob/master/ieee754.js
 * @param {!Uint8Array|!Array<number>} buffer The buffer.
 * @param {number} index The index to read from the buffer.
 * @param {number} ebits The number of bits of the exponent.
 * @param {number} fbits The number of bits of the fraction.
 * @return {number} The floating point number.
 */
function unpack(buffer, index, ebits, fbits) {}
```

## Contributing
**ieee754-buffer** welcomes all contributions from anyone willing to work in good faith with other contributors and the community. No contribution is too small and all contributions are valued.

See [CONTRIBUTING.md](https://github.com/rochars/ieee754-buffer/blob/master/CONTRIBUTING.md) for details.

### Style guide
**ieee754-buffer** code should follow the Google JavaScript Style Guide:  
https://google.github.io/styleguide/jsguide.html

### Code of conduct
This project is bound by a code of conduct: The [Contributor Covenant, version 1.4](https://github.com/rochars/ieee754-buffer/blob/master/CODE_OF_CONDUCT.md), also available at https://www.contributor-covenant.org/version/1/4/code-of-conduct.html

## LICENSE
Copyright (c) 2018 Rafael da Silva Rocha.  
Copyright (c) 2013 DeNA Co., Ltd.  
Copyright (c) 2010, Linden Research, Inc

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
