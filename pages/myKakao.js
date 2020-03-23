// pages/myKakao.js
import KakaoLayout from '../components/kakaoLayout'
import KakaoFriendsList from '../components/kakaoFriendsList.js'

export default function Fetch() {
    return (
        <div>
            <KakaoLayout>
                <KakaoFriendsList/>
            </KakaoLayout>
        </div>
    );
}