let arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(" ")
    .map(Number);
let [a, b] = arr;
let res='';
big: for (let i = a; i <= b; i++) {
    if (i == 2 || i == 3) res+=i+'\n';
    else if(i == 1) continue big;
    else {
        let isPrime=true;
        small: for (let x = 2; x * x <= i; x++) {
            if (i % x == 0){
                isPrime=false;
                break small;
            } 
        }
        if(isPrime)res+=i+'\n';
    }
}
console.log(res.trim())