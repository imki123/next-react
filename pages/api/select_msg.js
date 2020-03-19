// pages/api/select_msg.js
//mysql 연결
var mysql      = require('mysql');
var dbconfig   = require('../../lib/mysql.js');
var connection = mysql.createConnection(dbconfig);

//레코드를 담을 변수
var records

//쿼리전송
var qr = "SELECT *, date_format(msg_wrt_dttm,'%Y-%m-%d %H:%i:%s') dttm FROM msg "
connection.query(qr, function (error, results, fields) {
    if (error) {
        records = error
    }else{
        records = results //레코드
    }
});
connection.end();

export default (req, res) => {
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify(records)) //res생성
}