let arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((x) => x.trim());
const n = Number(arr.shift());
arr = arr.map((x) => x.split("").map(Number));
const zip = (arr) => {
    let origin = arr[0][0];
    let k = arr.length;
    for (let i in arr)
        for (let j in arr[i])
            if (arr[i][j] !== origin) {
                let first = arr.slice(0, k / 2).map((x) => x.slice(0, k / 2));
                let second = arr.slice(0, k / 2).map((x) => x.slice(k / 2));
                let third = arr.slice(k / 2).map((x) => x.slice(0, k / 2));
                let fourth = arr.slice(k / 2).map((x) => x.slice(k / 2));
                return (
                    "(" +
                    zip(first) +
                    zip(second) +
                    zip(third) +
                    zip(fourth) +
                    ")"
                );
            }
    return origin + "";
};
console.log(zip(arr));
