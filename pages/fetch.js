// pages/fetch.js

import Link from 'next/Link'
import Layout from '../components/layout'
import fetch from 'isomorphic-unfetch'

export default function Fetch(props) {
    Fetch.getInitialProps = async function () {
        const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
        const data = await res.json();

        console.log(`Show data fetched. Count: ${data.length}`);

        return {
            shows: data.map(entry => entry.show)
        };
    };
    return (
        <div>
            <Layout>
                <h1>Batman TV Shows</h1>
                <ol>
                    {props.shows.map(show => (
                        <li key={show.id}>
                            <Link href={`/q/[batmans]?title=${show.name}`} 
                                as={`/q/${show.name}`}>
                                <a>{show.name}</a>
                            </Link>
                        </li>
                    ))}
                </ol>
            </Layout>
            <style jsx>{`
            {
            }
            `}</style>
        </div>
    );
}