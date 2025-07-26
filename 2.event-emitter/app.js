// NodeJs is event driven programming i.e. we issue commands, give instruction to code via program and wait to respond back to program in asynchronous manner.

const EventEmitter = require('events'); // No CPP behind it. All created using javascript

class Emitter extends EventEmitter {}

const myE = new Emitter();

// on method, basically registers an event(callback functions) in kind of master object. We can register multiple events which all will be stored in master object.
myE.on('foo', () => {
  console.log('An event occurred 1');
});

myE.on('foo', () => {
  console.log('An event occurred 2');
});

myE.on('foo', (x) => {
  console.log('An event occurred with parameter');
  console.log(x);
});

myE.on('bar', () => {
  console.group('A bar event occurred!');
});

// when we call emit on the event, then it gets executed
myE.emit('foo');
myE.emit('foo', 'some text');

myE.emit('bar');
myE.emit('bar');
myE.emit('bar');
myE.emit('bar');
