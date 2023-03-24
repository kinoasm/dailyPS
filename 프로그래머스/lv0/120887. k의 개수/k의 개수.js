function solution(i, j, k) {
    var answer = 0;
    for(let n=i;n<=j;n++)answer+=(''+n).split("").filter(x=>Number(x)===k).length;
    return answer;
}