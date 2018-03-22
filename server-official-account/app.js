const express = require('express');
const wechat = require('wechat');
const mysql = require('mysql');

let config = {
    appid: 'wxd29115390c39d130',
    token: 'weixin',
    encodingAESKey: 'L2BObsKmAmGVWkveoU4HyWGK85BFIQ4zOVpazWpT42C'
};

let pool = mysql.createPool({user: 'root'});

let app = new express();

app.post('/', wechat(config, (req, res) => {
    let content = req.weixin.Content;
    console.log(content);
    // 根据 content 查询数据库表 chat
    let sql = `SELECT *
                FROM db.chat
                WHERE question LIKE ?`;
    pool.query(sql, ['%' + content + '%'], (err, results) => {
        // 返回 answer
        if (results.length === 1) {
            res.reply(results[0].answer);
        } else {
            res.reply('啊？');
        }
    });
}));

app.listen(3000);