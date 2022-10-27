var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n');
var a = parseInt(input[0]);
var b= parseInt(input[1]);
var origb=b
console.log((b%10)*a);
b=(b-(b%10))/10;
console.log((b%10)*a);
b=(b-(b%10))/10;
console.log(b*a);
console.log(origb*a);