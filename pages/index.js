// pages/index.js

import Link from 'next/Link'
import Layout from '../components/layout'
import DynamicLink from '../components/dynamicLink'

export default function Index() {
    return (
        <div>
            <Layout>
                <h1>
                    <span>안녕하세요. next입니다.</span>
                </h1>
                <ol>
                    <li>
                        <Link href="/more?title=more">
                            <a>more 더보기</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/api/user">
                            <a>api/user</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/fetch-user">
                            <a>fetch-user</a>
                        </Link>
                    </li>
                    <li>
                        <DynamicLink id='dynamic-page' />
                    </li>
                </ol>
            </Layout>
            <style jsx>{`
            a{
                color: blue;
            }
            `}</style>
        </div>
    );
}