let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
console.log(input[1].split('').map(x=>parseInt(x)).reduce((a,b)=>a+b,0));