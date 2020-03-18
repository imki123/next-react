// pages/msg_list.js

import Layout from '../components/layout'
import fetch from 'isomorphic-unfetch'

export default function Fetch(props) {
    return (
        <div>
            <Layout>
                <h1>api 테스트</h1>
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
    const res = await fetch('http://localhost:3000/api/select_msg');
    const data = await res.json();
    console.log(`data fetched. ${JSON.stringify(data)}`);

    return {
        data: data
    };
};