let arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((x) => x.trim());
const [l, c] = arr.slice(0, 1)[0].split(" ").map(Number);
const word = arr.slice(1)[0].split(" ").sort();
let answer = "";
const check = (str) => {
    let vowels = 0;
    let consonants = 0;
    for (let i in str)
        "aeiou".split("").indexOf(str[i]) === -1 ? consonants++ : vowels++;
    if (vowels > 0 && consonants > 1) return true;
    else return false;
};
const pickN = (pick, left) => {
    if (pick.length == l && check(pick)) answer += pick + "\n";
    else
        left.forEach((value, index) =>
            pickN(pick + value, left.slice(index + 1))
        );
};
pickN("", word);
console.log(answer.trim());
