let arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((x) => x.trim());
let [n] = arr.slice(0, 1)[0].split(" ").map(Number);
str = arr.slice(1)[0];
const solution = (n, str) => {
    let powList = [31];
    while (powList.length < 8)
        powList.push(
            (powList[powList.length - 1] * powList[powList.length - 1]) %
                1234567891
        );
    let remList = [1, 31];
    const to2 = (int) => {
        let res = [];
        while (int > 0) {
            res.push(int % 2);
            int = Math.floor(int / 2);
        }
        return res;
    };
    for (let i = 2; i <= 50; i++) {
        let ar = to2(i);
        let now = 1;
        for (let j in ar) {
            if (ar[j]) now = (now * powList[j]) % 1234567891;
        }
        remList.push(now);
    }
    let arr = str.split("");
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        let x = (arr[i].charCodeAt(0) - 96) * remList[i];
        res = (res + x)%1234567891;
    }
    return res;
};

console.log(solution(n, str));
