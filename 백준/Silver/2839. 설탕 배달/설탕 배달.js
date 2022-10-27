let n = parseInt(require('fs').readFileSync('dev/stdin').toString())
let isOkay=false;
for(let i=0;3*i<=n;i++){
    if((n-3*i)%5===0){
        console.log(i+parseInt((n-3*i)/5));
        isOkay=true;
        break;
    }
}
if(!isOkay) console.log(-1)