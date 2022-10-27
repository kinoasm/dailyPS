[e,s,m]=list(map(int,input().split(" ")))
ans=1
while True:
    if (ans-1)%15 + 1==e and (ans-1)%28 +1==s and (ans-1)%19 +1==m:
        break
    ans+=1
print(ans)