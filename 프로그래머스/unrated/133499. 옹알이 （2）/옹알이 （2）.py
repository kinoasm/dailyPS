def solution(babbling):
    answer = 0
    sample=['aya','ye','woo','ma']
    for i in babbling:
        okay=True
        last=''
        while len(i)>0:
            if i[-3:]=='aya' or i[-3:]=='woo':
                if i[-3:]!=last:
                    last,i=i[-3:],i[:-3]
                else:
                    okay=False
                    break
            elif i[-2:]=='ye' or i[-2:]=='ma':
                if i[-2:]!=last:
                    last,i=i[-2:],i[:-2]
                else:
                    okay=False
                    break
            else:
                okay=False
                break
        if okay:
            answer+=1
    return answer