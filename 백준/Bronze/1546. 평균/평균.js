let input=require('fs').readFileSync('/dev/stdin').toString().split("\n");
let arr = input[1].split(' ').map(x=>parseInt(x));
let sum = arr.reduce((a,b)=>a+b,0);
let max = arr.reduce((a,b)=>Math.max(a,b));
let n = parseInt(input[0]);
let average = sum*100/(n*max);
console.log(average);