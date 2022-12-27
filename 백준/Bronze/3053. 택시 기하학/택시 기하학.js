let n = Number(require("fs").readFileSync("/dev/stdin").toString().trim());
console.log((Math.PI * n * n).toFixed(6));
console.log(2 * n * n + ".000000");
