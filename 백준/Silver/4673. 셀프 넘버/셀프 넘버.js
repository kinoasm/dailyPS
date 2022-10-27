const d = (x) => {
    let res = x;
    while (x > 0) {
        res += x % 10;
        x = parseInt(x / 10);
    }
    return res;
};
let list = [];
for (let i = 1; i < 10000; i++) {
    list.push(d(i));
}
let arr = Array.from({ length: 10000 }, (_, i) => i + 1).filter(
    (x) => list.indexOf(x) === -1
);
for (let i in arr) {
    console.log(arr[i]);
}
