// pages/p/[batmans].js

import {useRouter} from 'next/router'
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
                    배트맨 쇼입니다.
                </h3>
            </Layout>
            <style jsx>{`
            {
            }
            `}</style>
        </div>
    );
}