let n = Number(require("fs").readFileSync("/dev/stdin").toString().trim());
let fix = parseInt(n.toString(2).slice(1), 2);
console.log(fix ? fix * 2 : n);
