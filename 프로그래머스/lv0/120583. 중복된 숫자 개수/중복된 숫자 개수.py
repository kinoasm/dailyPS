from functools import reduce
def solution(array, n):
    return reduce(lambda a,b:a+1 if b==n else a,array,0)