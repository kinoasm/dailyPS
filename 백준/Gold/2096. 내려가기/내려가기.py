n=int(input())
dp=list(map(lambda x:[int(x),int(x)],input().split()))
for i in range(1,n):
    now=list(map(int,input().split()))
    next=[[now[0]+min(dp[0][0],dp[1][0]),now[0]+max(dp[0][1],dp[1][1])],[now[1]+min(dp[0][0],dp[1][0],dp[2][0]),now[1]+max(dp[0][1],dp[1][1],dp[2][1])],[now[2]+min(dp[2][0],dp[1][0]),now[2]+max(dp[2][1],dp[1][1])]]
    dp=next
M=max(dp[0][1],dp[1][1],dp[2][1])
m=min(dp[0][0],dp[1][0],dp[2][0])
print(str(M)+" "+str(m))