const mysql = require('mysql');

let pool = mysql.createPool({user: 'root'});

let sql =  `INSERT INTO db.ip(min, max, loc) VALUE ?`;

let array = [
    ['1','2','Beijing'],
    ['3','4','Shanghai'],
    ['5','6','Guangzhou']
];

pool.query(sql, [array], (err, results) => {
    console.log(results.affectedRows);
});