const { Buffer } = require('buffer');

const buffer = Buffer.alloc(10000, 0); // fills all the 10000 elements with 0 by default. This filling takes some time.
// This zeroes out all the elements even if some data already existing in buffer.

// console.log('buffer', buffer);
const unsafeBuffer = Buffer.allocUnsafe(10000); // This is faster but it could make use of buffer that has already been used. Allocates memory without clearing it.
// The buffer may contain old or sensitive data from memory.
// You must overwrite the content before using.

// Buffer.from() // these are safe methods
// Buffer.concat()

console.log(Buffer.poolSize);

// poolSize >>> 1 , this is actually division by 2 (shiting the bit by 1) and then taking Math.floor of it

for (let i = 0; i < buffer.length; i++) {
  if (buffer[i] !== 0) {
    console.log(`element at position ${i} has value: ${buffer[i].toString(2)}`);
  }
}
