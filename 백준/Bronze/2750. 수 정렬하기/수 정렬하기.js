let arr=require('fs').readFileSync('dev/stdin').toString().trim().split("\n").map(x=>Number(x.trim())).slice(1).sort((a,b)=>a-b);
let res='';
arr.forEach(x=>res+=x+'\n');
console.log(res.trim())