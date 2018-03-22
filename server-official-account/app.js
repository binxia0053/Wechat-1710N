const express = require('express');
const wechat = require('wechat');

let config = {
    appid: 'wxd29115390c39d130',
    token: 'weixin',
    encodingAESKey: 'LufgXDb9ZM2dKRXHNCN0DlAZn2yL05mKh3n3X1xNcQy'
};

let app = new express();

app.post('/', wechat(config, (req, res) => {
    let message = req.weixin;
    console.log(message.Content);
    res.reply('收到。');
}));

app.listen(3000);