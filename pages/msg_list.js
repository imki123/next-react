// pages/msg_list.js

import Layout from '../components/layout'
import fetch from 'isomorphic-unfetch'
import { useEffect } from 'react';
import { useState } from 'react';

export default function Fetch() {
    const [records, setRecords] = useState([])
    useEffect(() => {
        fetch('/api/select_msg')
            .then(res => {
                if (res) {
                    return res.json()
                }else{
                    return []
                }
            })
            .then(json => {
                setRecords(json)
                console.log('records:', json)
            })
    }, [])
    return (
        <div>
            <Layout>
                <h1>hooks 테스트</h1>
                {<ol>
                    {records.map(i =>
                        <li key={i.msg_id}>{i.msg_user} {i.msg_content} {i.dttm}</li>)}
                </ol>}
            </Layout>
        </div>
    );
}