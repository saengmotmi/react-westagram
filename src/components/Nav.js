import React, { Component } from 'react'


class Nav extends Component {

    render() {
        return(
            <nav>
                <div className="nav-container">
                    <div className="nav-left">
                        <a href="main.html"><img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/logo.png" /></a>
                        <a href="main.html"><img id="nav-logo" src="images/logo.png" /></a>
                    </div>
                    <div className="search-container">
                        <input className="nav-search" type="text" placeholder="검색" />
                        <div className="nav-over-search"><p>검색</p></div>
                    </div>
                    <div className="nav-right">
                        <a href="login.html"><img src=" https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png" /></a>
                        <a href="login.html"><img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" /></a>
                        <a href="login.html"><img id="nav-account" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png" /></a>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Nav;