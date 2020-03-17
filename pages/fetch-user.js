// pages/fetch.js

import Link from 'next/Link'
import Layout from '../components/layout'
import fetch from 'isomorphic-unfetch'

export default function Fetch(props) {
    return (
        <div>
            <Layout>
                <h1>api 테스트</h1>
                {JSON.stringify(props.data)}
            </Layout>
            <style jsx>{`
            {
            }
            `}</style>
        </div>
    );
}

Fetch.getInitialProps = async function () {
    const res = await fetch('http://localhost:3000/api/user');
    const data = await res.json();
    console.log(`data fetched. ${JSON.stringify(data)}`);

    return {
        data : data
    };
};