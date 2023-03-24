function solution(array, n) {
    array.sort((a,b)=>a-b)
    var answer = array[0];
    let min=Math.abs(n-array[0]);
    for(let i of array)if(Math.abs(i-n)<min){
        min=Math.abs(i-n);
        answer=i;
    }
    return answer;
}