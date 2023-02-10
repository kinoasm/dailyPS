function solution(k, d) {
    let answer = 0;
    let a=parseInt(d/k);
    for(let i=0;i<=a;i++){
        answer+=Math.floor(Math.sqrt(d*d-i*i*k*k)/k)+1;
    }
    return answer;
}