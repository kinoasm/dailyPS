inp=list(map(int,input().split()))
if inp[0]>inp[1]:
    print(">")
elif inp[0]<inp[1]:
    print("<")
else:
    print("==")