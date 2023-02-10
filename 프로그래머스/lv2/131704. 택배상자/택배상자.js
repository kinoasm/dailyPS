function solution(order) {
    let stack=[];
    let i=1;
    let idx=0;
    let n=order.length;
    while(i<=n){
        if(i==order[idx])idx++;
        else stack.push(i);
        while(stack.length>0 && stack.at(-1)==order[idx]){
            idx++;
            stack.pop();
        }
        i++;
    }
    return idx;
}