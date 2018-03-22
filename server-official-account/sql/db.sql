DROP DATABASE IF EXISTS db;
CREATE DATABASE db CHARACTER SET UTF8;

DROP TABLE IF EXISTS db.chat;
CREATE TABLE db.chat(
    id INT AUTO_INCREMENT PRIMARY KEY COMMENT 'id, PK',
    question TEXT NOT NULL COMMENT '问题 NN',
    answer TEXT NOT NULL COMMENT '回复 NN'
) COMMENT '聊天表';

INSERT INTO db.chat(question, answer)
VALUE('你好', '你好！');
INSERT INTO db.chat(question, answer)
VALUE('你是谁', '我是聊天机器人');
INSERT INTO db.chat(question, answer)
VALUE('再见', '再见！');

SELECT * FROM db.chat WHERE question LIKE '%你好啊%';
