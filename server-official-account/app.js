const express = require('express');
const wechat = require('wechat');

let config = {
    appid: 'wxd29115390c39d130',
    token: 'weixin',
    encodingAESKey: 'L2BObsKmAmGVWkveoU4HyWGK85BFIQ4zOVpazWpT42C'
};

let app = new express();

app.post('/', wechat(config, (req, res) => {
    let content = req.weixin.Content;
    console.log(content);
    if (content.includes('JavaScript')) {
        res.reply('JS...');
    } else if (content.includes('HTML')) {
        res.reply('HTML...');
    } else if (content.includes('CSS')) {
        res.reply('CSS...');
    } else {
        res.reply('收到');
    }
}));

app.listen(3000);