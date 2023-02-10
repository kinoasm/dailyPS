function solution(arrayA, arrayB) {
    const gcd=(a,b)=>{
        if(a>b)[a,b]=[b,a];
        if(b%a==0)return a;
        return gcd(b%a,a);
    }
    let a=arrayA.reduce(gcd);
    let b=arrayB.reduce(gcd);
    for(let i of arrayA){
        if(i%b==0){
            b=0;
            break;
        }
    }
    for(let i of arrayB){
        if(i%a==0){
            a=0;
            break;
        }
    }
    return Math.max(a,b);
}