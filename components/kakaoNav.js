export default function KakaoNav() {
    return (
        <div className="nav_container">
            <ul className="up_nav">
                <li className="nav_button">친구</li>
                <li className="nav_button">채팅</li>
                <li className="nav_button">더보기</li>
            </ul>
            <ul className="down_nav">
                <li className="nav_button">이모티콘</li>
                <li className="nav_button">캘린더</li>
                <li className="nav_button">알림</li>
                <li className="nav_button">메뉴</li>
            </ul>
        <style jsx>{`
        .nav_container{
            text-align:center;
            padding:10px 0px;
        }
        .nav_button{
            padding:10px 10px 10px 10px;
        }
        .nav_button:hover{
            background-color:#f7e600;
            cursor:pointer;
        }
        .up_nav{
        }
        .down_nav{
            padding-top:190px;
        }
        `}</style>
        </div>
    )
}