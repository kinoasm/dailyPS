let str = require("fs").readFileSync("/dev/stdin").toString().trim();
let arr = str.split("");
let ans = "";
let stack = [];
for (let i in arr) {
    if (arr[i] === "(") {
        stack.push(arr[i]);
    } else if (arr[i] === "+" || arr[i] === "-") {
        while (stack.length > 0 && stack.at(-1) !== "(") ans += stack.pop();
        stack.push(arr[i]);
    } else if (arr[i] === "*" || arr[i] === "/") {
        while (
            stack.length > 0 &&
            (stack.at(-1) === "*" || stack.at(-1) === "/")
        )
            ans += stack.pop();
        stack.push(arr[i]);
    } else if (arr[i] === ")") {
        while (stack.length > 0 && stack.at(-1) !== "(") ans += stack.pop();
        stack.pop();
    } else {
        ans += arr[i];
    }
}
while (stack.length > 0) ans += stack.pop();
console.log(ans);
