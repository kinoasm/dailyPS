console.log(
  require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b)
    .join(" ")
);