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
            cont.style.height = 'auto'
        }
    }
    render() {
        return (
            <div className="container" ref={this.container}>
                <div className="nav">
                    <KakaoNav />
                </div>
                <div className="main">
                    {this.props.children}
                </div>
                <style jsx>{`
                * {
                    -webkit-box-sizing: border-box;
                       -moz-box-sizing: border-box;
                            box-sizing: border-box;
                }
                .container{
                    width:450px;
                }
                .nav{
                    display:inline-block;
                    width:100px;
                    height:100%;
                    border: 1px solid #DDD;
                    padding: 20px;
                    margin: 0;
                }
                .main{
                    display:inline-block;
                    width:350px;
                    height:100%;
                    border: 1px solid #DDD;
                    padding: 20px;
                }
                `}</style>
            </div>
        )
    }
}