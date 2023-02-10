function solution(s, skip, index) {
    let answer = '';
    let alphabet='abcdefghijklmnopqrstuvwxyz';
    let filtered=alphabet.split("").filter(x=>!skip.includes(x)).join("");
    let skipped='';
    for(let i=0;i<26;i++){
        if(!skip.includes(alphabet[i]))skipped+=filtered[(filtered.indexOf(alphabet[i])+index)%filtered.length];
        else skipped+=' ';
    }
    for(let i in s)answer+=skipped[alphabet.indexOf(s[i])]
    return answer;
}