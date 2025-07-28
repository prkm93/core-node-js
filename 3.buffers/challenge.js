// 0100 1000 0110 1001 0010 0001
// Allocate piece of memory to node app. Allocate exact same size.

const { Buffer } = require('buffer');

const memoryContainer = Buffer.alloc(3); // (6 * 4)/8

// What if ?
// Buffer.alloc(10), if we allocate more space than we need, then extra buffer is going to be wasted. So, allocate only that much buffer which is needed
// log (<Buffer 48 69 21 00 00 00 00 00 00 00>)

// if we allocate less buffer and try to write more data than the allocated buffer, then rest of the data will be discarded.

memoryContainer[0] = 0x48;
memoryContainer[1] = 0x69;
memoryContainer[2] = 0x21;

console.log(memoryContainer);
console.log(memoryContainer.toString('utf-8'));

// Other way to allocate buffer
