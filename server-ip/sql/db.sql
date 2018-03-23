DROP DATABASE IF EXISTS db;
CREATE DATABASE db CHARACTER SET UTF8;

DROP TABLE IF EXISTS db.ip;
CREATE TABLE db.ip(
    id INT AUTO_INCREMENT PRIMARY KEY COMMENT 'id, PK',
    min VARCHAR(15) NOT NULL COMMENT '起始 IP',
    max VARCHAR(15) NOT NULL COMMENT '终止 IP',
    loc VARCHAR(255) NOT NULL COMMENT '地理位置'
) COMMENT 'ip 表';

SELECT * FROM db.ip;