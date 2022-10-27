#var fs = require('fs');
#var input = fs.readFileSync('/dev/stdin').toString().split('\n');
#var a = parseInt(input[0]);
#var b = parseInt(input[1]);
#if(a>0 && b>0)console.log(1);
#else if(a<0 && b>0)console.log(2);
#else if(a<0 && b<0)console.log(3);
#else console.log(4);
a=int(input())
b=int(input())
if a>0 and b>0: print(1)
elif a<0 and b>0: print(2)
elif a<0 and b<0: print(3)
else: print(4)