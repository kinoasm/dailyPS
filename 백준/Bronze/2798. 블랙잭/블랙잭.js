let arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
let [n, m] = arr.shift().trim().split(" ").map(Number);
arr = arr[0].trim().split(" ").map(Number);
let ans = 0;
main: for (let i in arr) {
    let arr1 = arr.filter((x) => x != arr[i]);
    for (let j in arr1) {
        let arr2 = arr1.filter((x) => x != arr1[j]);
        for (let k in arr2) {
            let val = arr[i] + arr1[j] + arr2[k];
            if (m == val) {
                ans = m;
                break main;
            }
            if (m > val) {
                ans = Math.max(ans, val);
            }
        }
    }
}
console.log(ans);
