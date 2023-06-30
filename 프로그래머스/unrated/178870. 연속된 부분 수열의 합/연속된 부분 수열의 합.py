def solution(sequence, k):
    answer = []
    def register(x,y):
        if len(answer)==0:
            return [x,y]
        if answer[1]-answer[0]>y-x:
            return [x,y]
        return None
    a=0
    sum=0
    for b in range(len(sequence)):
        sum+=sequence[b]
        while sum-sequence[a]>=k:
            sum-=sequence[a]
            a+=1
        if sum==k:
            res=register(a,b)
            if res!=None:
                answer=res
            
    return answer