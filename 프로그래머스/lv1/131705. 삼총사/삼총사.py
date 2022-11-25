def solution(number):
    def pick3(pick,left):
        if len(pick)==3:
            return 1 if pick[0]+pick[1]+pick[2]==0 else 0
        else:
            result=0
            for i in range(len(left)):
                newPick=pick[0:]
                newPick.append(left[i])
                result+=pick3(newPick,left[i+1:])
            return result
    return pick3([],number)