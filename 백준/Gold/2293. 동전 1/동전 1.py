import sys
n,k = map(int, input().split())
numbers = [int(sys.stdin.readline()) for _ in range(n)]
dp=[0]*(k+1)
dp[0]=1
for i in range(0,n):
    for j in range(numbers[i],k+1):
        if j-numbers[i]>=0:
            dp[j]+=dp[j-numbers[i]]
print(dp[k])