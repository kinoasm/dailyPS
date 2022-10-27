var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n');
var n = parseInt(input[0].split(' ')[0]);
var x = parseInt(input[0].split(' ')[1]);
let arr = input[1].split(' ')
let res=''
for(let i in arr){
    let now=parseInt(arr[i]);
    if(now<x)res+=now+" ";
}
console.log(res)