n=int(input())
def gcd(a,b):
    if a>b:
        a,b=b,a
    return a if b%a==0 else gcd(b%a,a)
for i in range(0,n):
    a,b=map(int,input().split())
    print(int(a*b/gcd(a,b)))
    