let n = require("fs").readFileSync("/dev/stdin").toString().trim();
const solution = (n) => {
    let str = n.split("").map(Number);
    let arr = Array(10).fill(0);
    for (let i of str) arr[i]++;
    let sum = arr.reduce((a, b, i) => a + i * b, 0);
    if (sum % 3 == 0 && arr[0] > 0) {
        let res = "";
        let i = 9;
        while (i > 0 || arr[i] > 0) {
            if (arr[i] == 0) i--;
            else {
                res += i;
                arr[i]--;
            }
        }
        return res;
    } else return -1;
};
console.log(solution(n));
