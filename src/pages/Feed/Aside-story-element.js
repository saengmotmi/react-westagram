import React, { Component } from 'react';

class AsideStoryElement extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div key={this.props.key} className="aside-story-element">
                <div className="aside-story-profile">
                    <img src={this.props.imgSrc} />
                </div>
                <div className="story-container">
                    <div><a href={this.props.src}>{this.props.usrId}</a></div>
                    <div className="story-bottom-nickname">{this.props.time}</div>
                </div>
            </div>
        );
    }
}

export default AsideStoryElement;