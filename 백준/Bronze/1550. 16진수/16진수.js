const str = require("fs").readFileSync("/dev/stdin").toString().trim();
console.log(parseInt(str, 16));
