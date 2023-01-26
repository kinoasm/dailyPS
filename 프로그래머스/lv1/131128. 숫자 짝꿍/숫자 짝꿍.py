def solution(X, Y):
    answer = ''
    left,right=[0]*10,[0]*10
    for i in X:
        left[int(i)]+=1
    for i in Y:
        right[int(i)]+=1
    minimum=[]
    okay=False
    for i in range(0,10):
        now=min(left[i],right[i])
        if now>0:
            okay=True
        minimum.append(now)
    if not okay:
        return "-1"
    for i in range(0,10):
        if i==9 and len(answer)==0:
            answer='0'
        else:
            answer+=str(9-i)*minimum[9-i]
    return answer