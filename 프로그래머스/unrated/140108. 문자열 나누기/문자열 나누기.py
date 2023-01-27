def solution(s):
    answer = 0
    x,notx=0,0
    now=''
    for i in range(len(s)):
        if len(now)==0:
            now=s[i]
            x=1
        else:
            if s[i]==now:
                x+=1
            else:
                notx+=1
            if x==notx:
                answer+=1
                now=''
                x=0
                notx=0
    if len(now)>0:
        answer+=1
    return answer