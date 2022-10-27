n=int(input())
for i in range(1,n+1):
    inp=list(map(int,input().split()))
    print("Case #"+str(i)+": "+str(inp[0])+" + "+str(inp[1])+" = "+str(inp[0]+inp[1]))