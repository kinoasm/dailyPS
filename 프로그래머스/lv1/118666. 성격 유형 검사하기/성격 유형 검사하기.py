from functools import reduce
def solution(survey, choices):
    ans = [0,0,0,0]
    for i in range(0,len(survey)):
        if survey[i].find('R')!=-1:
            ans[0]+=choices[i]-4 if survey[i].find('T')==0 else 4-choices[i]
        if survey[i].find('C')!=-1:
            ans[1]+=choices[i]-4 if survey[i].find('F')==0 else 4-choices[i]
        if survey[i].find('J')!=-1:
            ans[2]+=choices[i]-4 if survey[i].find('M')==0 else 4-choices[i]
        if survey[i].find('A')!=-1:
            ans[3]+=choices[i]-4 if survey[i].find('N')==0 else 4-choices[i]
    return ('T' if ans[0]<0 else 'R')+('F' if ans[1]<0 else 'C')+('M' if ans[2]<0 else 'J')+('N' if ans[3]<0 else 'A')