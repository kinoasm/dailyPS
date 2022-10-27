let n = Number(require("fs").readFileSync("/dev/stdin").toString().trim());
console.log(
    (n + "")
        .split("")
        .sort((a, b) => Number(b) - Number(a))
        .join("")
);
