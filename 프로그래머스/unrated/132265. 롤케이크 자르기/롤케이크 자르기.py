def solution(topping):
    answer = 0
    left,right=[0]*10000,[0]*10000
    lCnt,rCnt=0,0
    for i in topping:
        right[i-1]+=1
        if right[i-1]==1:
            rCnt+=1
    for i in range(len(topping)):
        left[topping[i]-1]+=1
        right[topping[i]-1]-=1
        if right[topping[i]-1]==0:
            rCnt-=1
        if left[topping[i]-1]==1:
            lCnt+=1
        if rCnt==lCnt:
            answer+=1
    return answer