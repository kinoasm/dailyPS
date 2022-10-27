n=1000-int(input())
coins=[500,100,50,10,5,1]
i=0
ans=0
while n>0:
    if n>=coins[i]:
        n-=coins[i]
        ans+=1
    else:
        i+=1
print(ans)