const [[n], list] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((x) => x.trim().split(" ").map(Number));
let ans = [-1];
list.reverse();
let stack = [list[0]];
for (let i = 1; i < n; i++) {
    if (stack.at(-1) > list[i]) {
        ans.push(stack.at(-1));
        stack.push(list[i]);
    } else {
        while (stack.length > 0 && list[i] >= stack.at(-1)) stack.pop();
        if (stack.length === 0) {
            ans.push(-1);
            stack.push(list[i]);
        } else {
            ans.push(stack.at(-1));
            stack.push(list[i]);
        }
    }
}
ans.reverse();
console.log(ans.join(" "));
