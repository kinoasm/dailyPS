arr = list(map(int,input().split()))
list=[1,1,2,2,2,8]
res=[]
for i in range(0,6):
    res.append(list[i]-arr[i])
ans=''    
for i in res:
    ans+=str(i)+" "
print(ans.strip())