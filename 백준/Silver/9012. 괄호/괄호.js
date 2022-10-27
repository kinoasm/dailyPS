let arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
let n = arr.shift().trim().split(" ").map(Number)[0];
arr = arr.map((x) => x.trim().split(""));
for (let i in arr) {
    let cnt = 0;
    let isOkay = true;
    for (let x in arr[i]) {
        if (arr[i][x] == "(") cnt++;
        else cnt--;
        if (cnt < 0) {
            isOkay = false;
            break;
        }
    }
    if (isOkay && cnt == 0) console.log("YES");
    else console.log("NO");
}
