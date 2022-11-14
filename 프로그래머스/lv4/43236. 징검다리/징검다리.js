function solution(distance, rocks, n) {
    let answer = 0;
    rocks.sort((a,b)=>2*(a>b)-1);
    let short=0,
        long=distance;
    while(short<=long){
        let mid=Math.floor((short+long)/2);
        let cnt=0;
        let start=0;
        for(let i in rocks){
            if(rocks[i]-start<mid){
                cnt++;
            }else{
                start=rocks[i];
            }
        }
        if(distance-rocks[rocks.length-1]<answer)cnt++;
        if(cnt>n){
            long=mid-1;
        }else{
            short=mid+1;
            answer=Math.max(mid,answer);
        }
    }
    return answer;
}