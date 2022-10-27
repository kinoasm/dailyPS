let input = require('fs').readFileSync('dev/stdin').toString().split('\n').map(x=>parseInt(x));
let res = [];
for (let i in input) {
    let remainder = input[i] % 42;
    if (!isNaN(remainder) && res.indexOf(remainder + "") === -1) res.push(remainder + "");
}
console.log(res.length);
