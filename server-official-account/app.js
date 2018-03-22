const express = require('express');
const wechat = require('wechat');

let config = {
    appid: 'wxd29115390c39d130',
    token: 'weixin',
    encodingAESKey: 'LufgXDb9ZM2dKRXHNCN0DlAZn2yL05mKh3n3X1xNcQy'
};

let app = new express();

app.post('/', wechat(config, (req, res) => {
    let message = req.weixin.Content;
    console.log(message);
    if (message.includes('JavaScript')) {
        res.reply('JS...');
    } else if (message.includes('HTML')) {
        res.reply('HTML...');
    } else if (message.includes('CSS')) {
        res.reply('CSS...');
    } else {
        res.reply('收到');
    }
}));

app.listen(3000);