from functools import reduce
def solution(n):
    return reduce(lambda a,c: a+c, list(map(int,list(str(n)))), 0)