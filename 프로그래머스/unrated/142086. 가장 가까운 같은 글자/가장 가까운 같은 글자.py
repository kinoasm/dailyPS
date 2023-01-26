def solution(s):
    answer = []
    alphabet='abcdefghijklmnopqrstuvwxyz'
    cnt=[-1]*26
    for i in range(0,len(s)):
        if cnt[alphabet.index(s[i])]==-1:
            answer.append(-1)
        else:
            answer.append(i-cnt[alphabet.index(s[i])])
        cnt[alphabet.index(s[i])]=i
    return answer