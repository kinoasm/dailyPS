function solution(key, lock) {
    let l=key.length;
    let m=lock.length;
    const toStr=arr=>arr.map(x=>x.join("")).join("\n");
    const isIn=(x,y)=>x>=0&&y>=0&&x<l&y<l;
    
    const rotate=arr=>{
        let res=new Array(l);
        for(let i=0;i<l;i++)res[i]=new Array(l);
        for(let i=0;i<l;i++){
            for(let j=0;j<l;j++){
                res[i][j]=arr[l-j-1][i];
            }
        }
        return res;
    }
    const move=(arr,x,y)=>{
        let res=new Array(m);
        for(let i=0;i<m;i++)res[i]=new Array(m);
        for(let i=0;i<m;i++){
            for(let j=0;j<m;j++){
                if(isIn(i+x,j+y))res[i][j]=arr[i+x][j+y];
                else res[i][j]=0;
            }
        }
        return res;
    }
    const check=arr=>{
        for(let i=0;i<m;i++){
            for(let j=0;j<m;j++){
                if(arr[i][j]===0 && lock[i][j]===0)return false;
                else if(arr[i][j]===1 && lock[i][j]===1)return false;
            }
        }
        return true;
    }
    let isOkay=false;
    seq: for(let spin=0;spin<4;spin++){
        for(let i=-m+1;i<l;i++){
            for(let j=-m+1;j<l;j++){
                if(check(move(key,i,j))){
                    isOkay=true;
                    break seq;
                }
            }
        }
        key=rotate(key);
    }
    if(isOkay)return true;
    else return false;
}