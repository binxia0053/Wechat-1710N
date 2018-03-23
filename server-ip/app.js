const express = require('express');

let app = new express();

app.get('/', (req,res) => {
    let ip = req.query.ip;
    res.end('It works.');
});

app.listen(3000);