let input = require("fs").readFileSync("dev/stdin").toString();
let arr = input.split(" ").map((x) => parseInt(x));
if (arr[0] == arr[1]) {
    if (arr[2] == arr[1]) {
        console.log(arr[0] * 1000 + 10000);
    } else {
        console.log(1000 + arr[0] * 100);
    }
} else if (arr[0] == arr[2]) {
    console.log(1000 + 100 * arr[0]);
} else if (arr[1] == arr[2]) {
    console.log(1000 + 100 * arr[1]);
} else {
    console.log(Math.max.apply(null, arr) * 100);
}
