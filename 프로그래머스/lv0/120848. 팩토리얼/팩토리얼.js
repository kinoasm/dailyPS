function solution(n) {
    let now=1;
    let i=1;
    while(now<=n){
        i++;
        now*=i;
    }
    return i-1;
}