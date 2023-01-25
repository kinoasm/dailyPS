def solution(queue1, queue2):
    l = len(queue1)
    left,right,cnt,lIdx,rIdx=0,0,0,0,0
    for i in range(0,l):
        left+=queue1[i]
        right+=queue2[i]
    while left!=right and cnt<=3*l:
        if left>right:
            temp=queue1[lIdx]
            queue2.append(temp)
            left-=temp
            right+=temp
            lIdx+=1
        else:
            temp=queue2[rIdx]
            queue1.append(temp)
            left+=temp
            right-=temp
            rIdx+=1
        cnt+=1
    return cnt if left==right else -1