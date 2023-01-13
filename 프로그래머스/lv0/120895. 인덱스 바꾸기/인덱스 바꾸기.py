def solution(my_string, num1, num2):
    answer = ''
    temp1=my_string[num1]
    temp2=my_string[num2]
    for i in range(0,len(my_string)):
        if i==num1:
            answer+=temp2
        elif i==num2:
            answer+=temp1
        else:
            answer+=my_string[i]
    return answer