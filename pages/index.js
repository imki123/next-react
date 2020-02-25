import Link from 'next/link'
import Layout from '../components/layout'

export default function Index() {
    return (
        <div>
            <Layout>
                <h1>
                    <span>안녕하세요. next입니다.</span>
                </h1>
                <Link href="/more">
                    <a>더보기</a>
                </Link>
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