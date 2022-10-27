N=int(input())
for i in range(0,N):
    now=input()
    point=0
    cnt = 0
    for j in now:
        if j=="O":
            cnt+=1
            point+=cnt
        else:
            cnt = 0
    print(point)