import Link from 'next/link'
const handleBack = () =>{
    history.back();
}

const Header = () =>{
    return(
        <div>
            <table>
                <tr>
                    <td style={{textAlign:"left"}}>
                        <span onClick={handleBack}>뒤로</span>
                    </td>
                    <td style={{textAlign:"right"}}>
                        <Link href="/">
                            <span>홈으로</span>
                        </Link>
                    </td>
                </tr>
            </table>
            <style jsx>{`
                table{
                    width:100%;
                }
                td span{
                    color:blue;
                    // background-color:blue;
                    padding:3px;
                    border-radius:7px;
                    border:1px solid #DDD;
                    cursor:pointer;
                }
            `}</style>
        </div>
    )
}
export default Header;