let n = Number(require("fs").readFileSync("/dev/stdin").toString().trim());
let count = 0;
const check = (i, selected) => {
    let k = 1;
    let isOkay = true;
    while (k < i && isOkay) {
        if (
            selected[i - 1] === selected[k - 1] ||
            Math.abs(selected[i - 1] - selected[k - 1]) === i - k
        )
            isOkay = false;
        k++;
    }
    return isOkay;
};
const nQueen = (i, selected) => {
    if (check(i, selected)) {
        if (i === n) {
            count++;
        } else {
            for (let j = 1; j <= n; j++) {
                selected[i] = j;
                nQueen(i + 1, selected);
            }
        }
    }
};
nQueen(0, Array(n).fill(0));
console.log(count);
