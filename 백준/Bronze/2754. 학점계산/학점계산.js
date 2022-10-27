let str = require("fs").readFileSync("/dev/stdin").toString().trim();
let ans = 0;
let isF = false;
switch (str[0]) {
    case "A":
        ans += 4;
        break;

    case "B":
        ans += 3;
        break;

    case "C":
        ans += 2;
        break;

    case "D":
        ans += 1;
        break;

    case "F":
        isF = true;
        break;

    default:
        break;
}
if (!isF) {
    if (str[1] === "+") ans += 0.3;
    else if (str[1] === "-") ans -= 0.3;
}
console.log(ans.toFixed(1));
