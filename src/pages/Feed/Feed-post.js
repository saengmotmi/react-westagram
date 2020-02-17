import React, { Component } from 'react';

class FeedPost extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { key, myUsrId, myImgSrc, mySrc, myPostImgSrc, postBody } = this.props;

        return(
            <article id={key}>
                <div className="post-account-name">
                    <img alt={{myUsrId} + "님의 프로필 사진"} className="_6q-tv" src={myImgSrc} />
                    <div><a href={mySrc}>{myUsrId}</a></div>
                </div>
                <div className="post-pic">
                    <img src={myPostImgSrc} />
                </div>
                {/* <div className="post-bottom"> */}
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
                {/* </div> */}
                <div className="post-like-who">
                    <img alt="falsekind_님의 프로필 사진" className="_6q-tv" src={myImgSrc} />
                    <div>
                        <a href={mySrc}><b>{myUsrId}</b></a>님&nbsp;<b>외 {parseInt(Math.random()*100)}명</b>이 좋아합니다
                    </div>
                </div>
                <div className="post-main">
                    <div className="article-text">
                        <a href={mySrc}>{myUsrId}</a> {postBody}
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
        );
    }
}

export default FeedPost;