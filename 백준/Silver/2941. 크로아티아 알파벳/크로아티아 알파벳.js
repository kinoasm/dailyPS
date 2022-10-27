let input = require("fs").readFileSync("/dev/stdin").toString().trim();
const change = (str, chk, alt) => {
    let i = 0;
    let l = chk.length;
    let res = "";
    while (i <= str.length - 1) {
        if (str.slice(i, i + l) == chk) {
            res += alt;
            i += l;
        } else {
            res += str.slice(i, i + 1);
            i++;
        }
    }
    return res;
};
let s1 = change(input, "c=", "C");
let s2 = change(s1, "c-", "B");
let s3 = change(s2, "dz=", "F");
let s4 = change(s3, "d-", "D");
let s5 = change(s4, "lj", "L");
let s6 = change(s5, "nj", "N");
let s7 = change(s6, "s=", "S");
let s8 = change(s7, "z=", "Z");
console.log(s8.length);
