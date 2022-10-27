inp=list(map(int,input().split()))
a=inp[0]
b=inp[1]
c=inp[2]
print((a+b)%c)
print(((a%c)+(b%c))%c)
print((a*b)%c)
print(((a%c)*(b%c))%c)