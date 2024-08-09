if (!Object.prototype.hasOwnProperty.call(Array.prototype, 'toSorted')) {
    Object.defineProperty(Array.prototype, 'toSorted', {
      value: function(compareFn = (a, b) => String(a).localeCompare(b)) {
        const arrayCopy = this.slice();  
        return arrayCopy.sort(compareFn);
      },
      writable: true,
      configurable: true,
      enumerable: false
    });
  }