function solution(cards) {
    let n=cards.length;
    cards.unshift(0);
    let visit=Array(n+1).fill(0);
    let picks=[];
    const dfs=(start)=>{
        visit[start]=1;
        let cnt=1;
        let now=start;
        while(visit[cards[now]]===0){
            visit[cards[now]]=1;
            now=cards[now];
            cnt++;
        }
        return cnt;
    }
    for(let i=1;i<=n;i++){
        if(visit[i]===0)picks.push(dfs(i));
    }
    picks.sort((a,b)=>b-a);
    if(picks.length===1)return 0;
    return picks[0]*picks[1];
}