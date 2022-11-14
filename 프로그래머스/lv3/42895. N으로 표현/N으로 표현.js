function solution(N, number) {
    var list=[];
    list.push([N]);
    if(list[0][0]===number){
        return 1;
    }
    var l=2;
    while(list.length<8 ){
        var p=[];
        for(var m=0;m<l-1;m++){
            for(var i in list[m]){
                for(var j in list[l-m-2]){
                    var a=list[m][i];
                    var b=list[l-m-2][j];
                    if(a+b===number){
                        return l;
                    }else{
                        p.push(a+b);
                    }
                    if(a-b===number){
                        return l;
                    }else{
                        p.push(a-b);
                    }
                    if(a*b===number){
                        return l;
                    }else{
                        p.push(a*b);
                    }
                    if(Math.floor(a/b)===number){
                        return l;
                    }else{
                        if(Math.floor(a/b)!==Infinity){
                            p.push(Math.floor(a/b));
                        }
                    }
                }
            }
        }
        var a='';
        for(var i=0;i<l;i++){
            a+=N;
        }
        a=Number(a);
        if(a===number){
            return l;
        }else{
            p.push(a);
        }
        l++
        list.push(p);
    }
    return -1;
}