arr=[]
for i in range(0,9):
    arr.append(list(map(int,input().split())))
max=0
x=1
y=1
for i in range(0,9):
    for j in range(0,9):
        if arr[i][j]>max:
            max=arr[i][j]
            x=i+1
            y=j+1
print(max)
print(x,y)