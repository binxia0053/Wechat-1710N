const express = require('express');
const mysql = require('mysql');

let pool = mysql.createPool({user: 'root'});

let app = new express();


// Ctrl[+ Shift] + W(word)增(减)量选择
app.get('/', (req, res) => {
    let ip = req.query.ip;
    let sql = `SELECT *
                FROM db.ip
                WHERE INET_ATON(?)
                BETWEEN INET_ATON(min)
                AND INET_ATON(max)`;

    pool.query(sql, [ip], (err, results) => {
        if (err) throw err;
        if (results.length === 1) {
            let loc = results[0].loc;
            res.send({
                "status": "ok",
                "loc": loc
            });
        } else {
            res.send({"status": "err"});
        }
    });
});

app.listen(3000);