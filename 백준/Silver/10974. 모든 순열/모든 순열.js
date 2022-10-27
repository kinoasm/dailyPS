let n = Number(require("fs").readFileSync("/dev/stdin").toString().trim());
const solution = (n) => {
    let ans = "";
    let list = Array.from({ length: n }, (_, i) => i + 1);
    const pickN = (pick, left) => {
        if (pick.length == n) {
            ans += pick.join(" ") + "\n";
        } else {
            left.forEach((value, index, array) =>
                pickN(
                    [...pick, value],
                    array.filter((_, i) => i != index)
                )
            );
        }
    };
    pickN([], list);
    return ans.trim();
};
console.log(solution(n));
