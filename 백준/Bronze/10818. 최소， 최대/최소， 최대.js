var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n');
var arr = input[1].split(" ");
let min=parseInt(arr[0]);
let max=parseInt(arr[0]);
for(let i in arr){
    let now=parseInt(arr[i]);
    if(now<min)min=now;
    if(now>max)max=now;
}
console.log(min+" "+max);