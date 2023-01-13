function solution(numbers) {
    var answer = -Infinity;
    for(var i=0;i<numbers.length-1;i++){
        for(var j=i+1;j<numbers.length;j++){
            if(numbers[i]*numbers[j]>answer){
                answer=numbers[i]*numbers[j]
            }
        }
    }
    return answer;
}