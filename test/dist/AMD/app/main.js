define(function (require) {
    var IEEE754Buffer = require('../../../../dist/ieee754-buffer.js').IEEE754Buffer;
    var buffer = [];

    var ieee754Buffer = new IEEE754Buffer(8, 23);

    // pack a value
    ieee754Buffer.pack(buffer, 3.1415927410, 0)
    if (buffer[0] !== 0xdb ||
    	buffer[1] !== 0x0F ||
    	buffer[2] !== 0x49 ||
    	buffer[3] !== 0x40) {
    	throw new Error('AMD module error on pack binary32');
    }
    // unpack a value
    if (ieee754Buffer.unpack(buffer, 0).toFixed(10) !== '3.1415927410') {
    	throw new Error('AMD module error on unpack binary32');
    }
    console.log(buffer);
    document.write('OK');
});
