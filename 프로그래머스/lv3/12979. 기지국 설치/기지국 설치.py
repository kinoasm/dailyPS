import math
def solution(n, stations, w):
    answer = 0
    lst=[n]
    last=1
    for i in stations:
        div=lst.pop()
        if i-w>last:
            lst.append(i-w-last)
        if i+w>=n:
            break
        lst.append(n-i-w)
        last=i+w+1
    for i in lst:
        answer+=math.ceil(i/(2*w+1))
    return answer