let today = Date().split(" ");
let month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];
let mon = month.indexOf(today[1]) + 1;
let strMon = mon > 9 ? mon + "" : "0" + mon;
console.log(today[3] + "-" + strMon + "-" + today[2]);
