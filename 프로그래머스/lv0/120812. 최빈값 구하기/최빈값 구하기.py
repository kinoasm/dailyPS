def solution(array):
    count=[0]*1000
    for i in array: count[i]+=1
    maxCount=0
    maxIdx=0
    for i in range(0,1000):
        if count[i]>maxCount:
            maxCount=count[i]
            maxIdx=i
        elif count[i]==maxCount:
            maxIdx=-1
    return maxIdx