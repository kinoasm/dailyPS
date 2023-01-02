const str = require("fs").readFileSync("/dev/stdin").toString().trim();
const arr = Array(26).fill(0);
for (let i in str) arr[str[i].charCodeAt(0) - 97]++;
console.log(arr.join(" "));
