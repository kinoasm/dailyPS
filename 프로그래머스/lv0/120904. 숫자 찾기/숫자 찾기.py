def solution(num, k):
    answer=str(num).index(str(k))+1 if str(k) in str(num) else -1
    return answer