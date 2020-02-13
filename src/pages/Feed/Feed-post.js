import React, { Component } from 'react';

class FeedPost extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { myId, myUsrId, myImgSrc, mySrc, myName } = this.props.userData.myAccount;

        return(
            <div className="feeds">
                <article>
                    <div className="post-account-name">
                        <img alt="falsekind_님의 프로필 사진" className="_6q-tv" src={myImgSrc} />
                        <div><a href="http://instagram.com/falsekind_">{myUsrId}</a></div>
                    </div>
                    <div className="post-pic">
                        <img src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/e35/65696540_1103898356460482_6132257815883457169_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=102&_nc_ohc=h6PEGIEUbJkAX8um9Kt&oh=fd023a9d7857aa2e840d751b633c669f&oe=5EB6542C" />
                    </div>
                    <div className="post-bottom">
                        <div className="post-btn">
                            <div className="post-btn-left">
                                <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"/>
                                <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/comment.png"/>
                                <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/share.png"/>  
                            </div>
                            <div className="post-btn-right">
                                <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/bookmark.png" />
                            </div>
                        </div>
                    </div>
                    <div className="post-like-who">
                        <img alt="falsekind_님의 프로필 사진" className="_6q-tv" src={myImgSrc} />
                        <a href={mySrc}><b>{myUsrId}</b></a>님 <b>외 30명</b>이 좋아합니다
                    </div>
                    <div className="post-main">
                        <div className="article-text">
                            <a href={mySrc}>{myUsrId}</a> 갑자기 분위기 미국 (가로버전) pic by @minje.55
                        </div>
                        <div className="comment-list">
                            {/* 댓글 자리 */}
                        </div>
                        <div className="article-comment">
                            <div className="comment-form">
                                <textarea className="comment-text" cols="30" rows="1" placeholder="댓글 달기..."></textarea>
                                <input className="comment-button" type="button" value="게시" />
                            </div>
                        </div>
                        {/* <FeedPostComment /> */}
                    </div>
                </article>
            </div>
        );
    }
}

export default FeedPost;