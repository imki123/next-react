// pages/api/select_msg.js
var mysql      = require('mysql');
var dbconfig   = require('./mysql.js');
var connection = mysql.createConnection(dbconfig);

var db_data
var db_error
var qr = "SELECT *, date_format(msg_wrt_dttm,'%Y-%m-%d %H:%i:%s') dttm "
qr += "FROM msg "
connection.query(qr, function (error, results, fields) {
    if (error) {
        console.log('error:',error);
        db_error = error
    }else{
        console.log('result:',results);
        db_data = results
    }
});
  
connection.end();

export default (req, res) => {
    //req를 받아서 res페이지를 만들어줌
    if(!db_error){ //에러가 undefined면
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify(db_data)) //res생성
    }else{
        console.log('에러발생: '+db_error)
    }
}