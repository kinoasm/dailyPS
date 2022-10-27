let arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
arr = arr.map((x) => x.trim().split(" ").map(Number));
arr.pop();
let res = "";
for (let i in arr) {
    let now = arr[i];
    now = now.sort((a, b) => a - b);
    if (now[0] * now[0] + now[1] * now[1] === now[2] * now[2]) res += "right\n";
    else res += "wrong\n";
}
console.log(res.trim());
