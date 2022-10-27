let arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
let [n, m] = arr.shift().split(" ").map(Number);
arr = arr.map((x) => x.trim());
let noListen = arr.slice(0, n);
let noSeen = arr.slice(n);
if (n > m) {
    [noListen, noSeen] = [noSeen, noListen];
    [n, m] = [m, n];
}
noListen = noListen.sort();
noSeen = noSeen.sort();
let res = "";
let k = 0;
let a = 0;
for (let i = 0; i < m; i++) {
    while (noListen[k].localeCompare(noSeen[i]) === -1 && k<n-1) k++;
    if (noListen[k].localeCompare(noSeen[i]) === 0) {
        res += noSeen[i] + "\n";
        a++;
    }
}
res = a + "\n" + res;
console.log(res.trim());
