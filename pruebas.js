const a = String.prototype.toUpperCase.call({
    toString() {
      return "abcdef";
    },
  });
  
  const b = String.prototype.toUpperCase.call(true);
  
  // prints out 'ABCDEF TRUE'.
  console.log(a, b);