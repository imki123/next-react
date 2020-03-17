// pages/more.js

import Link from 'next/Link'
import {useRouter} from 'next/router'
import Layout from '../components/layout'

export default function More() {
    const router = useRouter()
    const qr = router.query
    let title
    if(qr.title === ''){
        
    }
    return (
        <div>
            <Layout>
                <h2>제목 : {qr.title}</h2>
                <h2>
                    next로 만든 간단한 라우팅입니다.
                </h2>
                <h3>
                    스타일은 jsx를 이용했어요.
                    컴포넌트별로 적용할 수 있어 편리하네요.
                </h3>
            </Layout>
            <style jsx>{`
            {
            }
            `}</style>
        </div>
    );
}