def solution(babbling):
    answer = 0
    sample=['aya','ye','woo','ma']
    for i in babbling:
        for j in sample:
            i=i.replace(j,' ')
        i=i.strip()
        if len(i)>0:
            continue
        answer+=1
    return answer