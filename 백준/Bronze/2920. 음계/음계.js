let arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(" ")
    .map(Number);
let isUp = arr[1] > arr[0];
let isEnd = false;
for (let i = 1; i < 7; i++) {
    if (isUp && arr[i + 1] < arr[i] && !isEnd) {
        console.log("mixed");
        isEnd = true;
    } else if (!isUp && arr[i + 1] > arr[i] && !isEnd) {
        console.log("mixed");
        isEnd = true;
    }
}
if (isUp && !isEnd) console.log("ascending");
else if (!isEnd) console.log("descending");
