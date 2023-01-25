def solution(t, p):
    answer = 0
    l,m=len(t),len(p)
    for i in range(0,l-m+1):
        if int(t[i:i+m])<=int(p):
            answer+=1
    return answer