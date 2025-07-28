const { Buffer } = require('buffer');

const memoryContainer = Buffer.alloc(4); // allocates 4 bytes i.e. 32 bits

memoryContainer[3]; // <Buffer 00 00 00 00> values are displayed in hexadecimal

// Each element of buffer can't store more than 8 bits i.e. 255 (in decimal)

console.log('memoryContainer', memoryContainer[0]);
console.log('memoryContainer', memoryContainer[1]);
console.log('memoryContainer', memoryContainer[2]);
console.log('memoryContainer', memoryContainer[3]);

memoryContainer[0] = 0xf4;
memoryContainer[1] = 0x34;
memoryContainer[2] = 0xb6;
// memoryContainer.writeInt8(-34, 2); // this method is used when want to write -ve numbers. 2 is for 2's complement
memoryContainer[3] = 0xff;
console.log(memoryContainer);
console.log(memoryContainer[0]); // 244 (Decimal) Logging each element of buffer
console.log(memoryContainer[1]); // 52
console.log(memoryContainer[2]); // 182
// console.log(memoryContainer.readInt8(2)); // 182
console.log(memoryContainer[3]); // 255

// console.log(memoryContainer.toString('utf-8'));

// Other way to allocate buffer
const buff = Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72]);
console.log(buff.toString('utf-8')); // buffer

const buff2 = Buffer.from('627566666572', 'hex');
console.log(buff2.toString('utf-8'));

const buff3 = Buffer.from('buffer', 'utf-8');
console.log(buff3);

const buff4 = Buffer.from('F09FA4A3', 'hex');
console.log(buff4.toString('utf-8'));
