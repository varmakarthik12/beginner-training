// const fs = require("fs");

// let k = { "name": "karthik" }
// fs.writeFile("./test-created-file.json", JSON.stringify(k), (...arg) => {
//     console.log({ arg });
// })
const { readFile } = require("fs");

(() => {
    let out = readFile("./test-created-file.json", 'utf8', function (err, data) {
        console.log({ err, data });
    })
})()