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
                <Link href="/more?title=more">
                    <a>more 더보기</a>
                </Link><br/>
                <Link href='/more?title=hello'>
                    <a>hello 더보기</a>
                </Link><br/>
                <DynamicLink id='dynamic-more'/>
            </Layout>
            <style jsx>{`
            {
                text-align:center;
            }
            a{
                color: blue;
            }
            `}</style>
        </div>
    );
}