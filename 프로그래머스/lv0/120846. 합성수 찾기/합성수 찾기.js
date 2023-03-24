function solution(n) {
    let num=Array(101).fill(0);
    for(let i=2;i<=10;i++){
        if(num[i]==0){
            let k=i*2;
            while(k<101){
                num[k]=k;
                k+=i;
            }
        }
    }
    return num.filter(x=>x>1&&x<=n).length;
}