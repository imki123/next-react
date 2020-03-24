// components/kakaoLayout.js
import React from 'react'
import ReactDom from 'react-dom'
import KakaoNav from './kakaoNav'

export default class KakaoLayout extends React.Component {
    //container의 높이를 동적으로 설정하기 위해 ref생성
    container = React.createRef()

    componentDidMount() {
        const cont = this.container.current
        if (cont.offsetHeight < 500) {
            cont.style.height = '500px'
        } else {
            cont.style.height = cont.offsetHeight+'px'
        }
    }
    render() {
        return (
            <div className="container" ref={this.container}>
                {/* 왼쪽에는 네비게이션 */}
                <div className="nav">
                    <KakaoNav />
                </div>
                {/* 오른쪽에는 표시하고싶은 컨텐츠. 메인 */}
                <div className="main">
                    {this.props.children}
                </div>
                <style jsx global>{`
                    * {
                        -webkit-box-sizing: border-box;
                           -moz-box-sizing: border-box;
                                box-sizing: border-box;
                    }
                    ul{
                        list-style-type: none;
                        margin-block-start: 0em;
                        margin-block-end: 0em;
                        padding-inline-start: 0px;
                    }
                    .container{
                        width:450px;
                    }
                    .nav{
                        display:inline-block;
                        width:100px;
                        height:100%;
                        border: 1px solid #DDD;
                        margin: 0;
                        vertical-align:top;
                    }
                    .main{
                        display:inline-block;
                        width:350px;
                        height:100%;
                        border: 1px solid #DDD;
                        vertical-align:top;
                    }
                `}</style>
            </div>
        )
    }
}