let input = require("fs").readFileSync("/dev/stdin").toString().split("");
let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
let list = [];
for (let i in alphabet) {
    list.push(input.indexOf(alphabet[i]));
}
let res='';
for(let i in list)res+=list[i]+" ";
console.log(res.trim());