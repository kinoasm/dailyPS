const [[n], ...list] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((x) => x.trim());
const ans = [];
sequence: for (let str of list) {
  let a = 0;
  let b = str.length - 1;
  let err = false;
  while (a < b) {
    if (str[a] !== str[b]) {
      if (err) {
        ans.push(2);
        continue sequence;
      }
      if (str[a + 1] === str[b] && str[a] === str[b - 1]) {
        err = true;
        let c = a,
          d = b - 1,
          e = a + 1,
          f = b,
          cFalse = true,
          eFalse = true;
        while (c < d) {
          if (str[c] !== str[d]) {
            cFalse = false;
            break;
          }
          c++;
          d--;
        }
        while (e < f) {
          if (str[e] !== str[f]) {
            eFalse = false;
            break;
          }
          e++;
          f--;
        }
        if (cFalse || eFalse) {
          ans.push(1);
          continue sequence;
        }
        ans.push(2);
        continue sequence;
      } else if (str[a + 1] === str[b]) {
        a++;
        err = true;
      } else if (str[a] === str[b - 1]) {
        b--;
        err = true;
      } else {
        ans.push(2);
        continue sequence;
      }
    }
    a++;
    b--;
  }
  ans.push(err ? 1 : 0);
}
console.log(ans.join("\n"));
