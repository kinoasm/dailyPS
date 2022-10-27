let arr = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let [n] = arr.slice(0, 1).map((x) => x.trim().split(" ").map(Number))[0];
arr = arr.map((x) => x.trim().split(" ")).slice(1);
let list = [];
let isFirst = true;
let pushQue = [arr.findIndex((x) => x[0] == "A")];
while (pushQue.length > 0) {
    let i = pushQue.shift();
    let now = arr[i][0];
    let [left, right] = ["", ""];
    if (arr[i][1] != ".") {
        left = arr[i][1];
        pushQue.push(arr.findIndex((x) => x[0] == left));
    }
    if (arr[i][2] != ".") {
        right = arr[i][2];
        pushQue.push(arr.findIndex((x) => x[0] == right));
    }
    if (isFirst) {
        list.push([arr[i][0], null, null, arr[i][0]]);
        if (arr[i][1] != ".") {
            list.push([arr[i][1], null, null, arr[i][1]]);
            list[0][3] += arr[i][1];
            list[0][1] = list.length - 1;
        }
        if (arr[i][2] != ".") {
            list.push([arr[i][2], null, null, arr[i][2]]);
            list[0][3] += arr[i][2];
            list[0][2] = list.length - 1;
        }
        isFirst = false;
    } else {
        let k = 0;
        while (list[k][0] !== now) {
            list[k][3] = left + list[k][3] + right;
            if (!list[k][1] || list[list[k][1]][3].indexOf(arr[i][0]) === -1) {
                k = list[k][2];
            } else {
                k = list[k][1];
            }
        }
        list[k][3] = left + list[k][3] + right;
        if (left) {
            list[k][1] = list.length;
            list.push([left, null, null, left]);
        }
        if (right) {
            list[k][2] = list.length;
            list.push([right, null, null, right]);
        }
    }
}
const preorder = (idx) => {
    let now = list[idx][0];
    let left = list[idx][1] ? preorder(list[idx][1]) : "";
    let right = list[idx][2] ? preorder(list[idx][2]) : "";
    return now + left + right;
};
const inorder = (idx) => {
    let now = list[idx][0];
    let left = list[idx][1] ? inorder(list[idx][1]) : "";
    let right = list[idx][2] ? inorder(list[idx][2]) : "";
    return left + now + right;
};
const postorder = (idx) => {
    let now = list[idx][0];
    let left = list[idx][1] ? postorder(list[idx][1]) : "";
    let right = list[idx][2] ? postorder(list[idx][2]) : "";
    return left + right + now;
};
console.log(preorder(0));
console.log(inorder(0));
console.log(postorder(0));
