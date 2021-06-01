("use strict");
const fs = require("fs");
let rawdata = fs.readFileSync("./studentlist.json");
let student = JSON.parse(rawdata);
console.log(student);

export {
    student
}