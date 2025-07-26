class Emitter {
  listeners = {};

  addListener(eventName, fn) {
    this.listeners[eventName] = this.listeners[eventName] || [];
    this.listeners[eventName].push(fn);
    return this;
  }

  removeListener(eventName, fn) {
    let functions = this.listeners[eventName];
    if (!functions) return this;
    this.listeners[eventName] = functions.filter((func) => func !== fn);
    return this;
  }

  on(eventName, fn) {
    return this.addListener(eventName, fn);
  }

  once(eventName, fn) {
    let functions = this.listeners[eventName];

    if (!functions) return false;

    functions.forEach((func) => {
      if (func === fn) {
        return this.off(eventName, fn);
      }
    });
    return false;
  }

  off(eventName, fn) {
    return this.removeListener(eventName, fn);
  }

  emit(eventName, ...args) {
    let functions = this.listeners[eventName];

    if (!functions) return false;
    functions.forEach((fn) => {
      fn(...args);
    });
    return true;
  }

  listenerCount(eventName) {
    let fns = this.listeners[eventName] || [];
    return fns.length;
  }
}

const myEmitter = new Emitter();

myEmitter.on('');
