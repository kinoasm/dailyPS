let arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((x) => x.trim());

let ans = "";
arr.pop();
for (let i of arr) {
    let now = i.split("");
    let list = [];
    let isOkay = true;
    for (let j of now) {
        if (j === "(") list.push("s");
        else if (j === "[") list.push("l");
        else if (j === ")") {
            if (list.length === 0 || list.pop() !== "s") {
                isOkay = false;
                break;
            }
        } else if (j === "]") {
            if (list.length === 0 || list.pop() !== "l") {
                isOkay = false;
                break;
            }
        }
    }
    if (list.length > 0) isOkay = false;
    if (isOkay) ans += "yes\n";
    else ans += "no\n";
}
console.log(ans.trim());
