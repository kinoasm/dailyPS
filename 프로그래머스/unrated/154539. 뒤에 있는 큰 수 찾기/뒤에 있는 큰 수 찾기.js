function solution(numbers) {
    let answer = [-1];
    let stack=[numbers.at(-1)];
    let n=numbers.length;
    for(let i=1;i<n;i++){
        let now=numbers[n-i-1];
        if(now>=stack[0]){
            answer.push(-1);
            stack=[now];
        }else{
            let k=0;
            while(k<stack.length && now<stack[k]){
                k++;
            }
            stack=stack.slice(0,k);
            answer.push(stack.at(-1));
            stack.push(now);
        }
        // console.log(stack)
    }
    return answer.reverse();
}