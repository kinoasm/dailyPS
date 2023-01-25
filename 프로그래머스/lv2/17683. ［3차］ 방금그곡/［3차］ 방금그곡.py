def solution(m, musicinfos):
    answer = ''
    def convert(string):
        res=''
        while len(string)>0:
            out,string=string[-1],string[:-1]
            if out=='#':
                out,string=string[-1].lower(),string[:-1]
            res=out+res
        return res
    def convertTime(time):
        a=list(map(int,time.split(":")))
        return a[0]*60+a[1]
    longest=0
    music=convert(m)
    l=len(music)
    for i in musicinfos:
        arr=i.split(",")
        time,title,song=convertTime(arr[1])-convertTime(arr[0]),arr[2],convert(arr[3])
        track=''
        while len(track)<time: track+=song
        track=track[0:time]
        if time>=l and music in track and time>longest:
            longest=time
            answer=title
    if len(answer)==0:
        answer='(None)'
    return answer