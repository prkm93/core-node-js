const { Buffer, constants } = require('buffer');

const b = Buffer.alloc(1e9); // 500MB of memory (512,000,000) bytes
console.log('constants', constants.MAX_LENGTH); //max buffer that can be allocated by default
setInterval(() => {
  for (let i = 0; i < b.length; i++) {
    // b.length is size of buffer in bytes
    b[i] = 0x22;
  }
  b.fill(0x22); // faster way to fill buffers. 2-3 times faster than for loop
  //   console.log(b);
}, 5000);

// When buffer is created , we are allocating a piece of memory to node application. This is visible in Activity Monitor in Memory as node process.
