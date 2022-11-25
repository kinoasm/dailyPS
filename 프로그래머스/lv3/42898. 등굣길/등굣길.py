def solution(m, n, puddles):
    dp= [[1 for x in range(n)] for y in range(m)]
    for i in puddles:
        dp[i[0]-1][i[1]-1]=0
    for i in range(m):
        for j in range(n):
            if dp[i][j]!=0:
                if i==0 and j==0:
                    dp[i][j]=1
                elif i==0 and j!=0:
                    dp[i][j]=dp[i][j-1]
                elif j==0:
                    dp[i][j]=dp[i-1][j]
                else:
                    dp[i][j]=(dp[i-1][j]+dp[i][j-1])%1000000007
    return dp[m-1][n-1]