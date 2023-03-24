function solution(n, m, section) {
    let count =0;
    seq: while(section.length>0){
        count++;
        let now=section[0];
        let end=now+m-1;
        if(end>=n)break;
        let temp=0;
        while(section[temp]<=end){
            temp++;
            if(temp>=section.length)break seq;
        }
        section=section.slice(temp);
    }
    return count;
}