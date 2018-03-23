const mysql = require('mysql');
const fs = require('fs');
const path = require('path');

let dataPath = path.join(__dirname, 'ip.data');

// todo 按行读取文件
