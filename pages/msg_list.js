// pages/msg_list.js

import Layout from '../components/layout'
import fetch from 'isomorphic-unfetch'

export default function Fetch(props) {
    return (
        <div>
            <Layout>
                <h1>api 테스트</h1>
                {props.domain}
                <ol>
                    {props.data.map(i =>
                        <li key={i.msg_id}>{i.msg_user} {i.msg_content} {i.dttm}</li>)}
                </ol>
            </Layout>
            <style jsx>{`
            {
            }
            `}</style>
        </div>
    );
}

Fetch.getInitialProps = async function (req) {
    //서버와 클라이언트의 도메인을 가져오기
    let domain
    if (req.req) {
        // Server side rendering
        //console.log(req.req)
        const referer = req.req.headers.referer
        let protocol
        if(!referer){
            protocol = 'http'
        }else{
            protocol = referer.substr(0,referer.indexOf(':'))
        }
        const host = req.req.headers.host
        domain = protocol + '://' + host
        console.log('domain:',domain)
    } else {
        // Client side rendering
        domain = window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '')
        console.log('domain:',domain)
    }
    const res = await fetch(domain+'/api/select_msg');
    const data = await res.json();
    //console.log(`data fetched. ${JSON.stringify(data)}`);

    return {
        data: data,
        domain: domain
    };
};