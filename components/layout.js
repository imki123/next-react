// components/layout.js

import Header from './header'
const Layout = props => (
    <div>
        <Header/>
        {props.children}
        <style jsx>{`
        div{
            margin: 20px;
            padding: 20px;
            border: 1px solid #DDD;
            backgroundColor: #ddd;
        }
        `}</style>
    </div>
);
export default Layout;