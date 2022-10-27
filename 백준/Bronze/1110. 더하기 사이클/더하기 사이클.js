var fs = require('fs');
var orig = parseInt(fs.readFileSync('/dev/stdin').toString());
let count = 0;
let [a, b] = [parseInt(orig / 10), orig % 10];
while (true) {
    count++;
    let temp = b;
    b = (a + b) % 10;
    a = temp;
    if (a == parseInt(orig / 10) && b == orig % 10) {
        break;
    }
}
console.log(count);
