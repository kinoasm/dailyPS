let n=parseInt(require('fs').readFileSync('dev/stdin').toString().trim());
let i=1;
let num=1;
while(n>num){
    num+=i*6;
    i++;
}
console.log(i);