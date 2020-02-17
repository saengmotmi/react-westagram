import React, { Component } from 'react';
import FeedPostComment from './Feed-post-comment';

class FeedPost extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue: "",
            commentId: "falsekind_",
            commentSrc: "http://instagram.com/falsekind_",
            commentData: []
        }
    }

    _changeInputValue = () => {
        this.setState({inputValue: event.target.value});
    }

    _addComment = () => {
        if (event.keyCode === 13) {
            event.preventDefault();
        }
        
        if ((event.keyCode === 13) && event.target.value !== "") {
            // this.state.commentData.concat(event.target.value);
            this.setState({
                commentData: this.state.commentData.concat(this.state.inputValue),
                inputValue: ""
            });
        }
    }

    _deleteComment = () => {
        // this.setState(this.state.commentData.splice(parseInt(event.target.parentNode.id),1));
        // filter : 특정 조건에 부합하는 원소만 뽑아내서 새 배열을 만듦
        
    }

    render() {
        const { key, myUsrId, myImgSrc, mySrc, myPostImgSrc, postBody } = this.props; //피드 뿌릴거 받아온거
        const commentDataList = this.state.commentData.map((param, idx) => { return (<FeedPostComment
                key = {idx+"comment"}
                usrId = {this.state.commentId}
                usrSrc = {this.state.commentSrc}
                comment = {param} //배열도 가능하구나... 근데 필요 없는 거였음
                deleteComment={this._deleteComment}
            />)});

        return(
            <article key={key}>
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
                        {commentDataList} {/* map으로 댓글 작성 */}
                    </div>
                    <div className="article-comment">
                        <div className="comment-form">
                            <textarea value={this.state.inputValue} onChange={this._changeInputValue} onKeyPress={this._addComment} className="comment-text" cols="30" rows="1" placeholder="댓글 달기..."></textarea>
                            <input onClick={this._addComment} className="comment-button" type="button" value="게시" />
                        </div>
                    </div>
                    {/* <FeedPostComment /> */}
                </div>
            </article>
        );
    }
}

export default FeedPost;