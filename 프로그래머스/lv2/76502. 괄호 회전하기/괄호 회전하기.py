def solution(s):
    answer = 0
    def check(str):
        stack=[]
        for i in str:
            if i=='[' or i=='{' or i=='(':
                stack.append(i)
            else:
                if len(stack)<1:
                    return False
                if ord(i)==93 and ord(stack.pop())!=91:
                    return False
                if ord(i)==125 and ord(stack.pop())!=123:
                    return False
                if ord(i)==41 and ord(stack.pop())!=40:
                    return False
        if len(stack)>0:
            return False
        return True
    now=s
    for i in range(len(s)):
        now=now[1:]+now[0]
        answer+=1 if check(now) else 0
    return answer