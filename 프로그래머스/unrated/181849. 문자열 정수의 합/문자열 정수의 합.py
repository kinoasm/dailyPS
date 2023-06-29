def solution(num_str):
    answer = 0
    arr=list(map(int,list(num_str)))
    for i in arr:
        answer+=i
    return answer