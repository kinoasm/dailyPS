w,h = list(map(int,input().split()))
p,q = list(map(int,input().split()))
t=int(input())
x=p+t
y=q+t
n=int(x/w)
m=int(y/h)
a=x%w
b=y%h
ans=''
if n%2==0: ans+=str(a)
else: ans+=str(w-a)
ans+=' '
if m%2==0: ans+=str(b)
else: ans+=str(h-b)
print(ans)