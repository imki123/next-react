// pages/api/db_msg.js

import './mysql'
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