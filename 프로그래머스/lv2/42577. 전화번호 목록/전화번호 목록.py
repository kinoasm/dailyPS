def solution(phone_book):
    sorted_list = sorted(phone_book)
    length=len(phone_book)
    for i in range(length-1):
        if sorted_list[i+1].startswith(sorted_list[i]):
            return False
    return True