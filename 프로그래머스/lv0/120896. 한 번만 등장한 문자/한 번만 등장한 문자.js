if (!Array.prototype.findLastIndex) {
  Object.defineProperty(Array.prototype, 'findLastIndex', {
    value: function(callback, thisArg) {
      const array = Object(this);
      const length = array.length >>> 0;
      let i = length - 1;
      while (i >= 0) {
        const value = array[i];
        if (callback.call(thisArg, value, i, array)) {
          return i;
        }
        i--;
      }
      return -1;
    }
  });
}
function solution(s) {
    return s.split("").sort().filter((v,i,arr)=>arr.findLastIndex(e=>e===v)===arr.indexOf(v)).join("");
}