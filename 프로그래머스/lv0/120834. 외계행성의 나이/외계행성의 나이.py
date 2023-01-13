def solution(age):
    answer = ''
    sample='abcdefghij'
    for i in str(age):
        answer+=sample[int(i)]
    return answer