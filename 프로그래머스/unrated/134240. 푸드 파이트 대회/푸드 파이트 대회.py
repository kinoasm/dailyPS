def solution(food):
    answer = ''
    for i in range(0,len(food)):
        answer+=(food[i]//2)*str(i)
    answer=answer+'0'+answer[::-1]
    return answer