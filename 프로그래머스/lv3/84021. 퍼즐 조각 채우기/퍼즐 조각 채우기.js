function solution(game_board, table) {
    let answer = 0;
    const n=game_board.length;
    const okay=(x,y,p)=>{
        let board=p?table:game_board;
        if(x>=0&&x<n&&y>=0&&y<n&&board[y]&&board[y][x]==p){
            return true;
        }else return false;
    }
    const getBlock=(x,y,p)=>{
        let list=[[x,y]];
        let que=[[x,y]];
        const checkIn=(a,b)=>{
            for(let i in list){
                if(list[i][0]==a && list[i][1]==b){
                    return true;
                }
            }
            return false;
        }
        while(que.length>0){
            let [a,b]=que.pop();
            if(!checkIn(a-1,b)&&okay(a-1,b,p)){
                list.push([a-1,b]);
                que.push([a-1,b]);
            }
            if(!checkIn(a+1,b)&&okay(a+1,b,p)){
                list.push([a+1,b]);
                que.push([a+1,b]);
            }
            if(!checkIn(a,b-1)&&okay(a,b-1,p)){
                list.push([a,b-1]);
                que.push([a,b-1]);
            }
            if(!checkIn(a,b+1)&&okay(a,b+1,p)){
                list.push([a,b+1]);
                que.push([a,b+1]);
            }
        }
        return list;
    }
    const after=(list,p)=>{
        let board=p?table:game_board;
        let np=p?0:1;
        for(let i in list){
            board[list[i][1]][list[i][0]]=!p*1;
        }
    }
    const getBlocks=p=>{
        let board=p?table:game_board;
        let blocklist=[];
        for(let i=0;i<n;i++){
            for(let j=0;j<n;j++){
                if(okay(j,i,p)){
                    let block=getBlock(j,i,p);
                    blocklist.push(block);
                    after(block,p);
                }
            }
        }
        return blocklist;
    }
    let gbBlock=getBlocks(0);
    let tBlock=getBlocks(1);
    const sorted=arr=>arr.sort((a,b)=>{
            if(a[0]==b[0]) return 2*(a[1]>b[1])-1;
            else return 2*(a[0]>b[0])-1;
        })
    const spin=arr=>arr.map(a=>[a[1],n-a[0]-1]);
    const moveFit=(ablock,bblock)=>{
        let [x,y]=[ablock[0][0]-bblock[0][0],ablock[0][1]-bblock[0][1]];
        for(let i in ablock){
            if((ablock[i][0]-bblock[i][0])!=x ||(ablock[i][1]-bblock[i][1])!=y) return false;
        }
        return true;
    }
    const isFit=(ablock,bblock)=>{
        if(ablock.length==0)return false;
        if(moveFit(sorted(ablock),sorted(bblock))) return true;
        if(moveFit(sorted(ablock),sorted(spin(bblock)))) return true;
        if(moveFit(sorted(ablock),sorted(spin(spin(bblock))))) return true;
        if(moveFit(sorted(ablock),sorted(spin(spin(spin(bblock)))))) return true;
        return false;
    }
    for(let a in gbBlock){
        for(let j in tBlock){
            if(gbBlock[a].length==tBlock[j].length){
                if(isFit(gbBlock[a],tBlock[j])){
                    answer+=gbBlock[a].length
                    gbBlock[a]=[];
                    tBlock[j]=[];
                }else continue;
            }
        }
    }
    return answer;
}