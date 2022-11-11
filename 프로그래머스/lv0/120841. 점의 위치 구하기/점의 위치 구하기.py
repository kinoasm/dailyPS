def solution(dot):
    return 1+(2 if dot[1]<0 else 0) + (0 if dot[1]*dot[0]>0 else 1)