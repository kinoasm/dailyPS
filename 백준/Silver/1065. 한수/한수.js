let input = require("fs").readFileSync("dev/stdin").toString();
let n = parseInt(input);
let cnt = 0;
for (let i = 1; i <= n; i++) {
    let arr = (i + "").split("").map((x) => parseInt(x));
    if (arr.length < 3) cnt++;
    else if (arr.length == 4) null;
    else {
        if (arr[2] + arr[0] == 2 * arr[1]) cnt++;
    }
}
console.log(cnt);
