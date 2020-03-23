// pages/index.js
import Layout from '../components/layout'
import Link from 'next/link'
import DLink from '../components/dLink'

export default function Index() {
    return (
        <div>
            <Layout>
                <div className="logo">
                    <img src="/next.jpg"/>
                </div>
                <h1>
                    <span>안녕하세요. next입니다.</span>
                </h1>
                <ol>
                    <li>
                        <Link href="/more?title=more">
                            <a>more</a>
                        </Link>
                    </li>
                    <li>
                        <DLink id='dynamic-page' title="dynamic-page"/>
                    </li>
                    <li>
                        <Link href="/msg_list">
                            <a>msg_list</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/myKakao">
                            <a>myKakao</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/test">
                            <a>test</a>
                        </Link>
                    </li>
                </ol>
            </Layout>
            <style jsx>{`
            a{
                color: blue;
            }
            .logo{
            }
            .logo img{
            }
            `}</style>
        </div>
    );
}