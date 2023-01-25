def solution(k, tangerine):
    answer = 0
    lst=sorted(tangerine)
    last=lst[0]
    cnt=[1]
    for i in range(1,len(lst)):
        if lst[i]==last:
            cnt[-1]+=1
        else:
            cnt.append(1)
        last=lst[i]
    sortedCnt=sorted(cnt,reverse=True)
    while k>0:
        answer+=1
        k-=sortedCnt[0]
        out=sortedCnt.pop(0)
    return answer