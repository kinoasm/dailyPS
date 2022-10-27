let arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((x) => x.trim());
let ans = "";
arr.pop();
const pick6 = (pick, left) => {
    if (pick.length === 6) ans += pick.join(" ") + "\n";
    else
        left.forEach((value, index, array) =>
            pick6([...pick, value], array.slice(index + 1))
        );
};
for (let q of arr) {
    let [n, ...list] = q.split(" ").map(Number);
    pick6([], list);
    ans += "\n";
}
console.log(ans.trim());
