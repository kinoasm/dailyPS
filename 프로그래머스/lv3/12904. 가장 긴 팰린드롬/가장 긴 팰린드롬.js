function solution(s)
{
    var answer = 0;
    for(let i=1;i<s.length-1;i++){
        if(s[i-1]==s[i+1]){
            let l=3;
            let k=2;
            while( (i-k) >= 0 && (i+k)< s.length && s[i-k] == s[i+k]){
                k++;
                l+=2;
            }
            answer=Math.max(answer,l);
        }
        if(s[i]==s[i+1]){
            let l=2;
            let k=2;
            while(i-k+1>=0 && i+k<s.length && s[i-k+1]==s[i+k]){
                k++;
                l+=2;
            }
            answer=Math.max(answer,l);
        }
    }
    if(s[0]==s[1])answer=Math.max(answer,2);
    if(answer==0)answer=1;
    return answer;
}