def solution(n):
    answer = 1
    for i in range(2,1000):
        mult=0
        while n%i==0:
            n/=i
            mult+=1
        answer*=mult+1
        if n==1: break
    return answer