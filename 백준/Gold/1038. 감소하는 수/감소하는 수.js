let n = Number(require("fs").readFileSync("/dev/stdin").toString().trim());
let list = [];
const pickI = (picked, i, left) => {
  if (picked.length === i) list.push(Number(picked.join("")));
  else {
    left.forEach((val, idx, arr) =>
      pickI([...picked, val], i, arr.slice(idx + 1))
    );
  }
};
for (let i = 1; i <= 10; i++) {
  let num = Array.from({ length: 10 }, (_, i) => i).reverse();
  pickI([], i, num);
}
list.sort((a, b) => a - b);
if (n >= list.length) console.log(-1);
else console.log(list[n]);
