let str = require("fs").readFileSync("/dev/stdin").toString().trim();
let isError = false;
if (str[0] === "0") isError = true;
let dp = [[1, 0]];
if (!isError)
  for (let i = 1; i < str.length; i++) {
    let last = dp.at(-1);
    let two = Number(str[i - 1] + str[i]);
    if (str[i] === "0") {
      if (two === 0 || two > 26) {
        isError = true;
        break;
      }
      dp.push([0, last[0]]);
    } else if (two > 26) dp.push([(last[0] + last[1]) % 1000000, 0]);
    else dp.push([(last[0] + last[1]) % 1000000, last[0]]);
  }
if (isError) console.log(0);
else console.log((dp.at(-1)[0] + dp.at(-1)[1]) % 1000000);
