export default function kakaoFriendsList() {
    const modalRef = React.createRef();
    const openProfile = () =>{
        const modal = modalRef.current
        modal.style.display='block'
        //modal.childNodes[0]
    }
    const closeModal = ()=>{
        const modal = modalRef.current
        modal.style.display='none'
        console.log('closeModal')
    }
    const zoomProfile=e=>{
        e.stopPropagation()
        const modal = modalRef.current
        console.log(modal.childNodes[0].classList)
        if(modal.childNodes[0].classList.contains('zoom')){
            modal.childNodes[0].classList.remove('zoom')
        }else{
            modal.childNodes[0].classList.add('zoom')
        }

    }
    return (
        <div>
            <ul className="fl_container">
                <li className="fl_not fl_title">친구</li>
                <li className="fl_not fl_subtitle">이름검색</li>
                <li className="fl" onClick={openProfile}>
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

            <div className="modal" ref={modalRef} onClick={closeModal}>
                <div className="modal_profile" onClick={zoomProfile}></div>
                <div className="modal_myname">나의 프로필</div>
            </div>
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
        .modal{
            display:none;
            position:absolute;
            top:8px;
            left:8px;
            width:450px;
            height:537px;
            background-color:rgba(0,0,0,0.7);
            cursor: alias;
        }
        .modal_profile{
            width:80%;
            height:80%;
            margin:10% 10% 0 10%;
            background-image:url('/profile.jpg');
            background-size:cover;
            border-radius:20px;
            cursor:pointer;
            cursor:zoom-in;
        }
        .modal_myname{
            position:relative;
            color:white;
            font-size:1.2rem;
            text-align:center;
        }
        .zoom{
            width:100% !important;
            height:100% !important;
            margin: 0 !important;
            border-radius:0px;
            cursor:pointer;
            cursor:zoom-out;
        }
        `}</style>
        </div>
    )
}