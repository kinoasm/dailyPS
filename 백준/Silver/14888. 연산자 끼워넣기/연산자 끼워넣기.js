const inp = require('fs').readFileSync('/dev/stdin').toString().split("\n").map(x=>x.trim());
const [[n],nums,opers]=inp.map(x=>x.split(" ").map(Number))
let min,max;
const calc=(num,oper,orig)=>{
    switch (oper) {
        case 0:
            return num+orig;
        case 1:
            return orig-num;
        case 2:
            return orig*num;
        case 3:
            return orig<0?-((-orig/num)>>0):(orig/num)>>0;
        default:
            break;
    }
}
const bruteForce=(orig,left,i)=>{
    if(i==n){
        if(min==undefined||orig<min)min=orig;
        if(max==undefined||orig>max)max=orig;
    }else{
        let now=left.slice();
        for(let j=0;j<4;j++){
            if(now[j]>0){
                now[j]--;
                bruteForce(calc(nums[i],j,orig),now,i+1);
                now[j]++;
            }
        }
    }
}
bruteForce(nums[0],opers,1);
console.log(max+'\n'+min)