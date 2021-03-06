# CHANGELOG

## 2.0.0 - 2020-01-02
- Throw TypeError if input is not a number.

## 1.0.1 - 2019-12-31
- Fix: rounding byte values must work the same on all browsers

## 1.0.0 - 2019-12-30
- New package structure:
	* dist file is "./dist/ieee754-buffer.js", a UMD served as "main"
	* ES6 source is "./index.js", served as "module"

## 0.2.1 (2018-08-06)
- Fix docstring in packFloatBits_()

## 0.2.0 (2018-08-06)
- API change: IEEE754Buffer.pack(buffer, num, index) instead of IEEE754Buffer.pack(buffer, index, num)

## 0.1.0 (2018-08-05)
- API change: IEEE754Buffer as a class

## 0.0.2 (2018-08-04)
- UMD compatible with IE6+
