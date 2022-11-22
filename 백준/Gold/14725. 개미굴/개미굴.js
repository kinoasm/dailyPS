const [[n], ...list] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((x) => x.trim().split(" "));
let tree = [];
for (let i in list) {
    let parent = list[i][1];
    let nowIdx = tree.findIndex((x) => x[0] === parent);
    if (nowIdx === -1) {
        let k = 0;
        while (tree.length > k && tree[k][0] < parent) k++;
        tree.splice(k, 0, [parent, []]);
        nowIdx = k;
    }
    let nodeNow = tree[nowIdx];
    for (let j = 1; j < list[i].length - 1; j++) {
        let children = list[i][j + 1];
        let childrenIdx = nodeNow[1].findIndex((x) => x[0] === children);
        if (childrenIdx === -1) {
            let k = 0;
            while (nodeNow[1].length > k && nodeNow[1][k][0] < children) {
                k++;
            }
            nodeNow[1].splice(k, 0, [children, []]);
            childrenIdx = k;
        }
        nodeNow = nodeNow[1][childrenIdx];
    }
}
const print = (node, depth) => {
    if (node[1].length === 0) return "--".repeat(depth) + node[0];
    else {
        let result = ["--".repeat(depth) + node[0]];
        for (let i in node[1]) {
            result.push(print(node[1][i], depth + 1));
        }
        return result.join("\n");
    }
};
for (let k in tree) console.log(print(tree[k], 0));
