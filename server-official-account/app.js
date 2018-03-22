const express = require('express');
const wechat = require('wechat');
const mysql = require('mysql');

let config = {
    appid: 'wxd29115390c39d130',
    token: 'weixin',
    encodingAESKey: 'wbmu7otn8FST9pot4YgQ8KKoBNXKfeXESfB0j8jWAdQ'
};

let pool = mysql.createPool({user: 'root'});

let app = new express();

app.all('/', wechat(config, (req, res) => {
    let content = req.weixin.Content;
    console.log(content);
    // 根据 content 查询数据库表 chat
    let sql = `SELECT *
                FROM db.chat
                WHERE ? LIKE CONCAT('%', question, '%')`;
    pool.query(sql, [content], (err, results) => {
        // 返回 answer
        if (results.length === 1) {
            res.reply(results[0].answer);
            console.log(results[0].answer);
        } else {
            res.reply('啊？');
            console.log('啊？');
        }
    });
}));

app.listen(3000);