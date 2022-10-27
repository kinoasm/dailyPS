var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n');
var a = parseInt(input[0]);
var b = parseInt(input[1]);
var c = parseInt(input[2]);
let ans=a*b*c+"";
ans=ans.split("");
for(let i=0;i<10;i++){
    console.log(ans.filter(val=>val==i+"").length)
}