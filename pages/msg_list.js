// pages/msg_list.js
import Layout from '../components/layout'

export default function Fetch({ data }) {
    //{data} json스트링으로 받은걸 다시 객체로 변환해야함
    data = JSON.parse(data)
    return (
        <div>
            <Layout>
                <h1>DB async 테스트</h1>
                <h5>getServerSideProps 이용해서 데이터 가져오기</h5>
                {<ol>
                    {data.map(i =>
                        <li key={i.msg_id}>{i.msg_user} {i.msg_content} {i.dttm}</li>)}
                </ol>}
            </Layout>
        </div>
    );
}

// 서버에서 DB조회 후 데이터를 async하여 
export async function getServerSideProps() {
    //mysql 연결
    const mysql = require('mysql2/promise');
    const dbconfig = require('../lib/mysql.js');
    const connection = await mysql.createConnection(dbconfig);
    //쿼리전송
    let qry = "SELECT *, date_format(msg_wrt_dttm,'%Y-%m-%d %H:%i:%s') dttm FROM msg "
    let data = await connection.query(qry);
    //레코드만 추출
    data = JSON.stringify(data[0])
    connection.end();

    // Pass data to the page via props. json스트링으로 변경됨.
    return { props: { data } }

}