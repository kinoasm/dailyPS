function solution(cards1, cards2, goal) {
    let isOkay=true;
    let filtered1=goal.filter(x=>cards1.includes(x));
    let filtered2=goal.filter(x=>cards2.includes(x));
    filtered1.forEach((x,i)=>{x!=cards1[i]?isOkay=false:null})
    filtered2.forEach((x,i)=>{x!=cards2[i]?isOkay=false:null})
    return isOkay?"Yes":"No";
}