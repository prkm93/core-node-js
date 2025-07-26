// Libuv and v8

// console.log('1. first');

// console.log(Date.now());
// for (let i = 0; i < 100000000000; i++) {}
// console.log(Date.now());

// console.log('2. second');

// Ex 2 - blocking main thread. loop will run first and then only setTimeout So priority is also synchronous code to run and then asynchronous

setTimeout(() => {
  console.log('Done');
}, 50);
for (let i = 0; i < 10000000000; i++) {}
console.log('after loop');
