import sys
input=sys.stdin.readline
N=int(input())
num=[0]*10001
for i in range(N):
    num[int(sys.stdin.readline())]+=1
for i in range(10001):
    for a in range(num[i]):
        print(i)