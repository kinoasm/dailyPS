function solution(order) {
    return (order+'').split("").reduce((prev,current)=>prev+((Number(current)>0&&Number(current)%3===0)*1),0)
}