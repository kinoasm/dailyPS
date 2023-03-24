function solution(my_string) {
    var answer = 0;
    let temp=0;
    for(let i of my_string){
        if(!isNaN(i))temp=temp*10+Number(i);
        else{
            answer+=temp;
            temp=0;
        }
    }
    answer+=temp;
    return answer;
}