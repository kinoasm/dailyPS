def solution(hp):
    answer = hp//5
    hp-=(hp//5)*5
    answer+=1 if hp>2 else 0
    answer+=hp if hp<3 else hp-3
    return answer