const [[n], ...list] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((x) => x.trim().split(" ").map(Number));
let ans = [];
let prime = Array.from({ length: 10 }, () =>
    Array.from({ length: 10 }, () =>
        Array.from({ length: 10 }, () => Array(10).fill(1))
    )
);
const toArr = (n) => {
    let now = n + "";
    while (now.length < 4) now = "0" + now;
    return now.split("");
};
const toNum = (arr) => Number(arr.join(""));
const isPrime = (n) => {
    let str = toArr(n).map(Number);
    return prime[str[0]][str[1]][str[2]][str[3]];
};
const notPrime = (n) => {
    let str = toArr(n).map(Number);
    prime[str[0]][str[1]][str[2]][str[3]] = 0;
};
for (let i = 2; i < 100; i++) {
    if (isPrime(i)) {
        for (let j = i * i; j <= 9999; j += i) {
            notPrime(j);
        }
    }
}
for (let i of list) {
    if (i[0] === i[1]) ans.push(0);
    else {
        let visit = Array.from({ length: 10 }, () =>
            Array.from({ length: 10 }, () =>
                Array.from({ length: 10 }, () => Array(10).fill(0))
            )
        );
        const isVisit = (arr) => {
            return visit[arr[0]][arr[1]][arr[2]][arr[3]];
        };
        const hasVisit = (arr) => {
            visit[arr[0]][arr[1]][arr[2]][arr[3]] = 1;
        };
        let origin = toArr(i[0]);
        hasVisit(origin);
        let que = [origin];
        let count = 1;
        let hasFound = false;
        sequence: while (que.length > 0) {
            let newQue = [];
            for (let a of que) {
                for (let k = 0; k < 4; k++) {
                    for (let j = 0; j < 10; j++) {
                        if (!(k == 0 && j == 0)) {
                            let next = a.slice();
                            next[k] = j + "";
                            if (!isVisit(next) && isPrime(toNum(next))) {
                                if (toNum(next) === i[1]) {
                                    hasFound = true;
                                    break sequence;
                                }
                                newQue.push(next);
                                hasVisit(next);
                            }
                        }
                    }
                }
            }
            count++;
            que = newQue;
        }
        if (hasFound) ans.push(count);
        else ans.push("Impossible");
    }
}
console.log(ans.join("\n"));
