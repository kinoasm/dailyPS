let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
let q = parseInt(input.shift());
for (let i in input) {
    let arr = input[i].split(" ").map((x) => parseInt(x));
    let n = arr.shift();
    let avr = arr.reduce((a, b) => a + b, 0) / n;
    let cnt = 0;
    for (let j in arr) {
        if (arr[j] > avr) cnt++;
    }
    console.log(((cnt / n) * 100).toFixed(3) + "%");
}

