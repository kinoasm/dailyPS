function solution(n, costs) {
    let answer = 0;
    let parent=Array.from({length:n},(_,i)=>i);
    const findParent=x=>x===parent[x]?x:findParent(parent[x]);
    const unionParent=(a,b)=>{
        let [x,y]=[findParent(a),findParent(b)];
        if(x===y)return false;
        if(x>y)parent[x]=y;
        else parent[y]=x;
        return true;
    }
    costs.sort((a,b)=>a[2]-b[2]);
    for(let i of costs){
        let now=unionParent(i[0],i[1]);
        if(now)answer+=i[2];
    }
    return answer;
}