let n = Number(require("fs").readFileSync("/dev/stdin").toString().trim());
let isOne = false;
let list = [[n, [n]]];
let history = [];
let count = -1;
let res;
while (!isOne) {
    let newList = [];
    for (let i in list) {
        let now = list[i][0];
        let route = list[i][1];
        if (now === 1) {
            isOne = true;
            res = route;
        }
        if (now % 2 == 0 && history.indexOf(now / 2) === -1) {
            newList.push([now / 2, [...route, now / 2]]);
            history.push(now / 2);
        }
        if (now % 3 == 0 && history.indexOf(now / 3) === -1) {
            newList.push([now / 3, [...route, now / 3]]);
            history.push(now / 3);
        }
        if (history.indexOf(now - 1) === -1) {
            newList.push([now - 1, [...route, now - 1]]);
            history.push(now - 1);
        }
    }
    count++;
    list = newList;
}
let ans = count + "\n" + res.reduce((a, b) => a + " " + b, "").trim();
console.log(ans);
