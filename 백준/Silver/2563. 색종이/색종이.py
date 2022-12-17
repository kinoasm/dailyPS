n=int(input())
arr=[]
for i in range(0,n):
    arr.append(list(map(int,input().split())))
ans = 0
field=[]
for i in range(0,101):
    field.append([0]*101)
for i in arr:
    for j in range(i[0],i[0]+10):
        for k in range(i[1],i[1]+10):
            field[j][k]=1
for i in range(0,101):
    for j in range(0,101):
        if field[i][j]==1:
            ans+=1
print(ans)