def solution(n):
    def gcd(a,b):
        if a<b:
            temp=a
            a=b
            b=temp
        return b if a%b==0 else gcd(b,a%b)
    return n/gcd(n,6)