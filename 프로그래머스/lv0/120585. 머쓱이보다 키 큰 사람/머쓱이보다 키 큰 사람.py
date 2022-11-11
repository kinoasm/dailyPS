from functools import reduce
def solution(array, height):
    return reduce(lambda a,b:a+1 if b>height else a,array,0)