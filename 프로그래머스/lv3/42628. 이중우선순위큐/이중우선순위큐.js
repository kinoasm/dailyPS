function solution(operations) {
    var answer = [];
    let com=[];
    for(let i in operations){
        let a=operations[i].split(' ')
        a[1]=Number(a[1]);
        com.push(a);
    }
    let q=[];
    let max,min,maxIdx,minIdx;
    for(let i in com){
        if(com[i][0]=='I'){
            q.push(com[i][1]);
            q.sort((a,b)=>2*(a<b)-1);
        }else{
            if(com[i][1]==1){
                q.shift();
            }else{
                q.pop();
            }
        }
    }
    if(q.length==0){
        q.push(0);
    }
    return [q[0],q[q.length-1]];
}