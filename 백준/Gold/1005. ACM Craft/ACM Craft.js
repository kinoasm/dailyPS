let arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
let [t] = arr.shift().trim().split(" ").map(Number);
let res = "";
let cnt = 0;
//for-sequence by cases
for (let q = 0; q < t; q++) {
    //n,k,order,w is as mentioned, list = d1,d2,...,dn
    let [n, k] = arr
        .slice(cnt, ++cnt)[0]
        .trim()
        .split(" ")
        .map(Number);
    let list = arr
        .slice(cnt, ++cnt)[0]
        .trim()
        .split(" ")
        .map(Number);
    let order = arr
        .slice(cnt, cnt + k)
        .map((x) => x.trim().split(" ").map(Number));
    cnt += k;
    let [w] = arr
        .slice(cnt, ++cnt)[0]
        .trim()
        .split(" ")
        .map(Number);
    //visit order setting by counting prerequisites
    let visit = [];
    for (let i = 0; i < n; i++) visit.push([i, []]);
    let time = Array(n).fill(-1);
    for (let i in order) {
        visit[order[i][1] - 1][1].push(order[i][0] - 1);
    }
    visit = visit.sort((a, b) => a[1].length - b[1].length);
    let again = false;
    let visited = Array(n).fill(0);
    //algo start
    let isNotZero = true;
    do {
        again = false;
        seq: for (let a in visit) {
            let i = visit[a][0];
            if (visited[i] === 0) {
                //with no prerequisite
                if (visit[a][1].length == 0) time[i] = list[i];
                //with prerequisite
                else {
                    let max = list[i];
                    for (let j in visit[a][1]) {
                        //when didn't make up check again
                        if (time[visit[a][1][j]] === -1) {
                            again = true;
                            continue seq;
                        }
                        max = Math.max(time[visit[a][1][j]] + list[i], max);
                    }
                    time[i] = max;
                }
                visited[i] = 1;
            }
        }
        //check w and break
        if (time[w - 1] > 0) {
            res += time[w - 1] + "\n";
            isNotZero = false;
            break;
        }
    } while (again);
    if (isNotZero) res += 0 + "\n";
}
console.log(res.trim());
