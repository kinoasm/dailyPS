function solution(lines) {
    var answer = 0;
    var tab = [];
    for (var i = 0; i < lines.length; i++) {
        var timestamp = Date.parse(lines[i].substr(0, 23));
        var spent = +lines[i].substring(24, lines[i].length - 1) * 1000 - 1;
        tab.push([timestamp - spent, 0]);
        tab.push([timestamp+1000, 1]);
    }
    tab.sort((a, b) => a[0] - b[0]);
    console.log(tab)
    var count = 0;
    for (var j = 0; j < tab.length; j++) {
        tab[j][1] == 0 ? count++ : count--;
        answer = count > answer ? count : answer;
    }
    return answer;
}