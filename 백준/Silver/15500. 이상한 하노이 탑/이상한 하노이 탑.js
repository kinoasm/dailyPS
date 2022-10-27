const inp = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .split("\n")
    .map((x) => x.trim());
let [[n], list] = inp.map((x) => x.split(" ").map(Number));
list = [[], list, [], []];
let count = 0;
let move = "";
let target = n;
let [from, extra, to] = [1, 2, 3];
while (target > 0) {
    if (!list[from][0]) [from, extra] = [extra, from];
    else {
        let now = list[from].pop();
        if (now == target) {
            move += from + " " + to + "\n";
            list[to].push(now);
            target--;
        } else {
            move += from + " " + extra + "\n";
            list[extra].push(now);
        }
        count++;
    }
}
console.log(count + "\n" + move.trim());
