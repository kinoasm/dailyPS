function solution(gems) {
    let answer = [1,gems.length];
    let cnt=new Set(gems).size;
    let gemMap = new Map();
    gems.forEach((gem,i)=>{
        gemMap.delete(gem);
        gemMap.set(gem,i);
        if(gemMap.size===cnt){
            const now=[gemMap.values().next().value+1,i+1];
            answer=answer[1]-answer[0]>now[1]-now[0]?now:answer;
        }
    })
    return answer;
}