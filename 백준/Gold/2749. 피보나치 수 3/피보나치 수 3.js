let n = Number(
  BigInt(require("fs").readFileSync("/dev/stdin").toString().trim()) %
    1500000n
);
if (n === 0) console.log(0);
else if (n === 1) console.log(1);
else {
  let dp = [0, 1];
  while (dp.length <= n) dp.push((dp.at(-1) + dp.at(-2)) % 1000000);
  console.log(dp.at(-1));
}
