def solution(k, m, score):
    answer = 0
    sortedApple=sorted(score,reverse=True)
    i=-1
    while i<len(score)-m:
        i+=m
        answer+=sortedApple[i]*m
    return answer