def solution(k, score):
    answer = []
    hall=[]
    for i in range(0,len(score)):
        if len(hall)<k or score[i]>hall[-1]:
            hall.append(score[i])
            hall=sorted(hall,reverse=True)[0:k]
        answer.append(hall[-1])
    return answer