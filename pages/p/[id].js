import {useRouter} from 'next/router'
import Link from 'next/link'
import React, { useState } from 'react'
import Layout from '../../components/layout'
import DynamicLink from '../../components/dynamicLink' 

export default function More() {
    const router = useRouter()
    const qr = router.query
    const [input, setInput] = useState('마음에 드는 URL을 입력해보세요 :)')
    const [cls, setCls] = useState('hide')

    const handleChange = () => {
        setInput(event.target.value) //인풋 밸류
    }

    
    return (
        <div>
            <Layout>
                <h2>제목 : {qr.title}</h2>
                <h3>
                    와우. URL을 보세요! 이곳은 다이나믹 페이지입니다.<br/>
                    내가 원하는 url로 설정할 수 있답니다.<br/>
                    Link와 [id].js, as 속성으로 손쉽게 만들 수 있어요.
                </h3>
                <h4>
                    새로운 URL : <input value={input} onChange={handleChange}/>
                </h4>
                <DynamicLink id={input}/>
            </Layout>
            <style jsx>{`
            {
                text-align:center;
            }
            input{
                width:300px;
            }
            `}</style>
        </div>
    );
}