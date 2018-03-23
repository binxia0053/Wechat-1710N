const mysql = require('mysql');
const fs = require('fs');
const path = require('path');

let dataPath = path.join(__dirname, 'ip.data');
// eol = End Of Line
let eolRegExp = process.platform === 'win32' ? /\r\n/ : /\n/;

fs.readFileSync(dataPath, 'UTF-8')
    .split(eolRegExp)
    .forEach(function (line) { // 449767
        let min = line.split(/\s+/)[0];
        let max = line.split(/\s+/)[1];
        let loc = line.replace(min, '').replace(max, '').trim();

    });
// Shift + Alt + F10
