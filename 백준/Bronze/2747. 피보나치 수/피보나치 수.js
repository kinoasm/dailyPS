let n = Number(require("fs").readFileSync("/dev/stdin").toString().trim());
let dp = [0, 1, 1];
while (dp.length <= n) dp.push(dp.at(-1) + dp.at(-2));
console.log(dp.at(-1));
