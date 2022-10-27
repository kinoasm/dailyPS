var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');
var a = parseInt(input[0]);
var b = parseInt(input[1]);
let ans=(a*60+b-45)%1440;
if(ans<0)ans+=1440;
console.log(parseInt(ans/60)+" "+(ans%60));