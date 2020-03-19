// pages/fetch.js

import Link from 'next/link'
import Layout from '../components/layout'
import fetch from 'isomorphic-unfetch'
import { useEffect } from 'react';
import { useState } from 'react';

export default function Fetch(props) {
    const [records, setRecords] = useState([])
    useEffect(() => {
        fetch('/api/user')
            .then(res => res.json())
            .then(json => {
                setRecords(json)
                console.log('records:', json)
            })
    }, [])
    return (
        <div>
            <Layout>
                <h1>fetch-user</h1>
                {JSON.stringify(records)}
            </Layout>
        </div>
    );
}