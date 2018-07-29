define(function (require) {
    var ieee754Buffer = require('../../../../ieee754-buffer.umd.js');
    var buffer = [];
    // pack a value
    ieee754Buffer.pack(buffer, 0, 3.1415927410, 8, 23)
    if (buffer[0] !== 0xdb ||
    	buffer[1] !== 0x0F ||
    	buffer[2] !== 0x49 ||
    	buffer[3] !== 0x40) {
    	throw new Error('AMD module error on pack binary32');
    }
    // unpack a value
    if (ieee754Buffer.unpack(buffer, 0, 8, 23).toFixed(10) !== '3.1415927410') {
    	throw new Error('AMD module error on unpack binary32');
    }
    console.log(buffer);
});
