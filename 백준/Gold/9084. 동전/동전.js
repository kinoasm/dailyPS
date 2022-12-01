const [[t], ...list] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((x) => x.trim().split(" ").map(Number));
let ans = [];
for (let q = 0; q < t; q++) {
  const [[n], coins, [money]] = list.slice(3 * q, 3 * q + 3);
  let dp = Array(money + 1).fill(0);
  dp[0] = 1;
  for (let i = 0; i < coins.length; i++)
    for (let j = coins[i]; j <= money; j++) dp[j] += dp[j - coins[i]];
  ans.push(dp[money]);
}
console.log(ans.join("\n"));
