// pages/index.js

import Link from 'next/link'
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
                        <DynamicLink id='dynamic-page' title="dynamic-page"/>
                    </li>
                    <li>
                        <Link href="/msg_list">
                            <a>msg_list</a>
                        </Link>
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