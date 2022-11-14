function solution(n) {
    var answer = 0;
    var cnt=a=>{
        if(a==0){
            return 1;
        }else{
            var c=0;
            for(var i=0;i<a;i++){
                c+=cnt(i)*cnt(a-i-1);
            }
            return c;
        }
    }
    return cnt(n);
}