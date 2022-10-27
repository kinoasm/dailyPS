let arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((x) => x.trim());
let [n, m] = arr.slice(0, 1)[0].split(" ").map(Number);
arr = arr.slice(1).map((x) => x.split(" ").map(Number));
const solution = (mat) => {
    let max = 0;
    const iMinos = [
        [
            [0, 0],
            [0, 1],
            [0, 2],
            [0, 3],
        ],
        [
            [0, 0],
            [1, 0],
            [2, 0],
            [3, 0],
        ],
    ];
    const oMinos = [
        [
            [0, 0],
            [0, 1],
            [1, 0],
            [1, 1],
        ],
    ];
    const lMinos = [
        [
            [0, 0],
            [0, 1],
            [0, 2],
            [1, 0],
        ],
        [
            [0, 0],
            [1, 0],
            [2, 0],
            [2, 1],
        ],
        [
            [0, 0],
            [0, 1],
            [1, 1],
            [2, 1],
        ],
        [
            [1, 0],
            [1, 1],
            [1, 2],
            [0, 2],
        ],
    ];
    const jMinos = [
        [
            [0, 1],
            [1, 1],
            [2, 1],
            [2, 0],
        ],
        [
            [0, 0],
            [1, 0],
            [1, 1],
            [1, 2],
        ],
        [
            [0, 0],
            [0, 1],
            [1, 0],
            [2, 0],
        ],
        [
            [0, 0],
            [0, 1],
            [0, 2],
            [1, 2],
        ],
    ];
    const sMinos = [
        [
            [0, 0],
            [1, 0],
            [1, 1],
            [2, 1],
        ],
        [
            [0, 1],
            [0, 2],
            [1, 1],
            [1, 0],
        ],
    ];
    const zMinos = [
        [
            [0, 0],
            [0, 1],
            [1, 1],
            [1, 2],
        ],
        [
            [0, 1],
            [1, 1],
            [1, 0],
            [2, 0],
        ],
    ];
    const tMinos = [
        [
            [0, 1],
            [1, 1],
            [1, 0],
            [1, 2],
        ],
        [
            [0, 0],
            [1, 0],
            [1, 1],
            [2, 0],
        ],
        [
            [0, 0],
            [0, 1],
            [0, 2],
            [1, 1],
        ],
        [
            [0, 1],
            [1, 1],
            [2, 1],
            [1, 0],
        ],
    ];
    let minos = [].concat(
        iMinos,
        jMinos,
        oMinos,
        sMinos,
        zMinos,
        lMinos,
        tMinos
    );
    const isIn = (arr) => {
        for (let i of arr) if (i[0] >= n || i[1] >= m) return false;
        return true;
    };
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            for (let k of minos) {
                let list = [];
                let now = 0;
                for (let l = 0; l < 4; l++)
                    list.push([i + k[l][0], j + k[l][1]]);
                if (isIn(list)) {
                    for (let q of list) now += mat[q[0]][q[1]];
                }
                if (now > max) max = now;
            }
        }
    }
    return max;
};

console.log(solution(arr));
