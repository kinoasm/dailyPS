def solution(board):
    answer=0
    dp=[]
    for i in range(len(board)):
        dp.append([0]*len(board[0]))
    for i in range(len(board)):
        for j in range(len(board[0])):
            if i==0 or j==0:
                dp[i][j]=board[i][j]
            elif board[i][j]==1:
                dp[i][j]=min(dp[i-1][j],dp[i-1][j-1],dp[i][j-1])+1
            if dp[i][j]*dp[i][j]>answer:
                answer=dp[i][j]*dp[i][j]
    return answer