n=int(input())
first=list(input())
for i in range(1,n):
    now=input()
    for j in range(len(now)):
        if first[j]!='?' and first[j]!=now[j]:
            first[j]='?'
print(''.join(first))