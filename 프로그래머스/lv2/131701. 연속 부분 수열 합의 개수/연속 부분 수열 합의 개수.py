def solution(elements):
    answer = 0
    newArr=[]
    for i in elements:
        newArr.append(i)
    for i in elements:
        newArr.append(i)
    newArr.pop()
    sums=[]
    for i in range(1,len(elements)+1):
        miniSum=0
        for j in range(0,i):
            miniSum+=newArr[j]
        sums.append(miniSum)
        for j in range(1,len(elements)):
            miniSum+=newArr[j+i-1]-newArr[j-1]
            sums.append(miniSum)
    sortedSum=sorted(sums)
    last=0
    for i in sortedSum:
        if i!=last:
            answer+=1
        last=i
    return answer