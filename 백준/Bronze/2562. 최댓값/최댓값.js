let arr = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(x=>parseInt(x));
let max=arr[0];
let idx=1;
for(let i=0;i<9;i++){
    if(arr[i]>max){
        max=arr[i];
        idx=i+1;
    }
}
console.log(max);
console.log(idx);