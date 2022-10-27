let n = Number(require("fs").readFileSync("/dev/stdin").toString().trim());
let list = [];
let i = 666;
while (list.length <= n) {
    let str = (i + "").split("");
    for (let k = 0; k < str.length - 2; k++) {
        if (str[k] === "6" && str[k + 1] === "6" && str[k + 2] === "6") {
            list.push(i);
            break;
        }
    }
    i++;
}
console.log(list[n - 1]);
