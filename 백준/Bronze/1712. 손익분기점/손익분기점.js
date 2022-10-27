let input = require('fs').readFileSync('dev/stdin').toString().trim().split(' ').map(x=>parseInt(x));

if (input[1] >= input[2]) console.log(-1);
else {
    let x = input[2] - input[1];
    if (input[0] % x === 0) console.log(input[0] / x + 1);
    else console.log(Math.floor(input[0] / x) + 1);
}