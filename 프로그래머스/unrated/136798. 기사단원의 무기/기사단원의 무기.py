import math
def solution(number, limit, power):
    answer = 0
    def count(n):
        cnt=0
        if n==1:
            return 1
        for i in range(1,int(math.sqrt(n))+1):
            if n%i==0:
                cnt+=2 if (n/i)!=i else 1
        return cnt
    for i in range(1,number+1):
        cnt=count(i)
        # print(i,cnt)
        answer+=cnt if cnt<=limit else power
    return answer