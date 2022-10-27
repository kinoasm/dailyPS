const inp = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .split("\n")
    .map((x) => x.trim());
let [[n], list] = inp.map((x) => x.split(" ").map(Number));
if (n == 1) console.log(0);
else {
    let dp = [list[0]];
    for (let i = 1; i < n; i++) {
        if (dp.at(-1) < list[i]) dp.push(list[i]);
        else {
            let start = 0;
            let end = dp.length - 1;
            let mid = ((start + end) / 2) >> 0;
            while (dp[mid] != dp[end] && dp[mid] != dp[start]) {
                if (dp[mid] > list[i]) {
                    end = mid;
                    mid = ((start + end) / 2) >> 0;
                } else {
                    start = mid;
                    mid = ((start + end) / 2) >> 0;
                }
            }
            dp[mid] > list[i] ? (dp[mid] = list[i]) : (dp[mid + 1] = list[i]);
        }
    }
    console.log(n - dp.length);
}
