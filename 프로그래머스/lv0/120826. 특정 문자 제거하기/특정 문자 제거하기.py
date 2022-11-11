def solution(my_string, letter):
    return "".join(map(lambda x: '' if x==letter else x,my_string))