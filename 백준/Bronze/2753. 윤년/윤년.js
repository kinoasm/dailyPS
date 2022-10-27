var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');
var a = parseInt(input[0]);
if(a%4!=0)console.log(0)
else{
    a/=4
    if(a%25!=0)console.log(1)
    else{
        a/=25
        if(a%4!=0)console.log(0)
        else console.log(1)
    }
}