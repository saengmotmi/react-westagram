import React, { Component } from 'react';

class FeedPostComment extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        const { key, id, usrId, usrSrc, comment } = this.props;

        return(
            <div onClick={this.props.deleteComment} id={id} className="comment-element" key={key}>
                <p><a href={usrSrc}><b>{usrId}</b></a>&nbsp;{comment}</p>
                <div className="delete-comment">✖️</div>
            </div>
        );
    }
}

export default FeedPostComment;