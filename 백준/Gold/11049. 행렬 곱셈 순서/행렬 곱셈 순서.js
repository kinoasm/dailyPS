const [[n], ...list] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((x) => x.trim().split(" ").map(Number));
function solution(m) {
    var answer = 0;
    var key = [];
    var len = m.length;
    for (var i in m) {
        key.push(m[i][0]);
    }
    key.push(m[len - 1][1]);
    var arr = [];
    for (var i = 0; i < len; i++) {
        var row = [];
        for (var j = 0; j < len; j++) {
            row.push(0);
        }
        arr.push(row);
    }
    for (var s = 1; s <= len - 1; s++) {
        for (var i = 0; i <= len - s - 1; i++) {
            for (var k = i; k <= i + s - 1; k++) {
                if (k == i)
                    arr[i][i + s] =
                        arr[i][k] +
                        arr[k + 1][i + s] +
                        key[i] * key[k + 1] * key[i + s + 1];
                arr[i][i + s] = Math.min(
                    arr[i][i + s],
                    arr[i][k] +
                        arr[k + 1][i + s] +
                        key[i] * key[k + 1] * key[i + s + 1]
                );
            }
        }
    }
    return arr[0][len - 1];
}
console.log(solution(list));
