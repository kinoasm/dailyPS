function solution(n, times) {
    var answer = 0;
    times.sort((a,b)=>2*(a>b)-1);
    let first=1,
        last=times[times.length-1]*n;
    while(first<=last){
        let mid=Math.round((first+last)/2);
        let cnt=0;
        for(let i=0;i<times.length;i++){
            cnt+=Math.floor(mid/times[i]);
        }
        if(cnt>=n){
            last=mid-1;
            if(answer==0){
                answer=mid;
            }else{
                answer=Math.min(mid,answer);
            }
        }else first=mid+1;
    }
    return answer;
}