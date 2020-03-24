export default function KakaoNav() {
    return (
        <div>
            <ul className="fl_container">
                <li className="fl_not fl_title">친구</li>
                <li className="fl_not fl_subtitle">이름검색</li>
                <li className="fl">
                    <img className="profile" src="/profile.jpg"/>
                    <span className="profile_name">나의 프로필</span></li>
                <li className="fl_not fl_subtitle">생일인 친구</li>
                <li className="fl">친구의 생일을 확인해보세요!</li>
                <li className="fl_not fl_subtitle">즐겨찾기</li>
                <li className="fl">친구1</li>
                <li className="fl">친구2</li>
                <li className="fl">친구3</li>
                <li className="fl_not fl_subtitle">친구</li>
                <li className="fl">친구4</li>
                <li className="fl">친구5</li>
                <li className="fl">친구6</li>
            </ul>
        <style jsx>{`
        .fl_container{
            padding:10px 0px;
        }
        .fl_not{
            padding:10px 20px;
        }
        .fl{
            padding:5px 20px;
        }
        .fl:hover{
            background-color:#f7e600;
            cursor:pointer;
        }
        .fl_title{
            font-size:1.3rem;
            font-weight:bold;
        }
        .fl_subtitle{
            font-size:0.8rem;
            color:grey;
            margin-top:10px;
        }
        .profile{
            width:50px;
            height:50px;
            border-radius:20px;
        }
        .profile_name{
            display:inline-block;
            padding:14px;
            vertical-align:top;
        }
        `}</style>
        </div>
    )
}