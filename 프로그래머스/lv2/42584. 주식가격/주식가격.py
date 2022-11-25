def solution(prices):
    answer = [0]*len(prices)
    stack=[]
    for i in range(len(prices)):
        if len(stack)==0 or prices[i]>=stack[-1][0]:
            stack.append([prices[i],i])
        else:
            while len(stack)>0 and prices[i]<stack[-1][0]:
                now=stack.pop()
                answer[now[1]]=i-now[1]
            stack.append([prices[i],i])
    while len(stack)>0:
        now=stack.pop()
        answer[now[1]]=len(prices)-now[1]-1
    return answer