export default function KakaoNav() {
    return (
        <div>
            <ul className="fl_container">
                <li className="fl">친구</li>
                <li className="fl">이름검색</li>
                <li className="fl">나</li>
                <li className="fl">생일인 친구</li>
                <li className="fl">친구의 생일을 확인해보세요!</li>
                <li className="fl">즐겨찾기</li>
                <li className="fl">친구1</li>
                <li className="fl">친구2</li>
                <li className="fl">친구3</li>
                <li className="fl">친구4</li>
            </ul>
        <style jsx>{`
        .fl_container{
            padding:10px 0px;
        }
        .fl{
            padding:10px 10px 10px 10px;
        }
        .fl:hover{
            background-color:#f7e600;
            cursor:pointer;
        }
        `}</style>
        </div>
    )
}