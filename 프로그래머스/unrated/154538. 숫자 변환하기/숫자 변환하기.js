function solution(x, y, n) {
    if(x===y) return 0;
    let answer = 0;
    let que=[x];
    let visit=Array(1000001).fill(0);
    while(que[0]<=y){
        let newQue=[];
        answer++;
        for(let i in que){
            let arr=[que[i]+n,que[i]*2,que[i]*3];
            if(arr.includes(y))return answer;
            else {
                for(let j in arr){
                    if(visit[arr[j]]===0){
                        newQue.push(arr[j]);
                        visit[arr[j]]=1;
                    }
                }
            }
        }
        que=newQue.sort((a,b)=>a-b);
    }
    return -1;
}