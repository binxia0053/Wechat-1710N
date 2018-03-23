const mysql = require('mysql');
const fs = require('fs');
const path = require('path');

let pool = mysql.createPool({user: 'root'});

let dataPath = path.join(__dirname, 'ip.data');
// eol = End Of Line
let eolRegExp =
    process.platform === 'win32' ? /\r\n/ : /\n/;

let sql = `INSERT INTO db.ip(min, max, loc)
            VALUE ?`;
let counter = 0;
let array = []; // 将来是一个二维数组 array[0] = [];
let index = 0;
fs.readFileSync(dataPath, 'UTF-8')
    .split(eolRegExp)
    .forEach(function (line) {
        let min = line.split(/\s+/)[0];
        let max = line.split(/\s+/)[1];
        let loc = line.replace(min, '').replace(max, '').trim();
        array[index++] = [min, max, loc];
    });
const BATCH = 10000;
for (let i = 0; i < array.length / BATCH; i++) {
    let arr = array.slice(BATCH * i, BATCH * (i + 1));
    pool.query(sql, [arr], (err, results) => {
        if (err) throw err;
        counter += results.affectedRows;
        console.log(counter);
    });
}
// Shift + Alt + F10
