// pages/p/[id].js

import {useRouter} from 'next/router'
import Link from 'next/link'
import React, { useState } from 'react'
import Layout from '../../components/layout'

export default function More() {
    const router = useRouter()
    const qr = router.query
    
    return (
        <div>
            <Layout>
                <h2>제목 : {qr.title}</h2>
                <h3>
                    다이나믹 페이지입니다.<br/>
                    내가 원하는 url로 설정할 수 있답니다.<br/>
                    Link와 [id].js, as 속성으로 손쉽게 만들 수 있어요.
                </h3>
            </Layout>
            <style jsx>{`
            {
            }
            input{
                width:300px;
            }
            `}</style>
        </div>
    );
}