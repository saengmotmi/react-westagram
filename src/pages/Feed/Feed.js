import React, { Component } from 'react';
import Nav from '../../components/Nav';
import FeedPost from './Feed-post';
import Aside from './Aside';

class Feed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: {
                aside: {
                    asideId: "a",
                    asideUsrId: "bb_87y",
                    asideImgSrc: "/images/story-el-img.jpg",
                    asideSrc: "http://instagram.com/bb_87y",
                    asideTime: "지금"
                },
                myAccount: {
                    myId: "b",
                    myUsrId: "falsekind_",
                    myImgSrc: "/images/my-profile-img.jpg",
                    mySrc: "http://instagram.com/falsekind_",
                    myName: "오종"
                },
                storyData: [
                    {id: 1, usrId: "bb_87y", imgSrc: "/images/story-el-img.jpg", src: "http://instagram.com/bb_87y", time: "지금"},
                    {id: 2, usrId: "bb_87y", imgSrc: "/images/story-el-img.jpg", src: "http://instagram.com/bb_87y", time: "지금"},
                    {id: 3, usrId: "bb_87y", imgSrc: "/images/story-el-img.jpg", src: "http://instagram.com/bb_87y", time: "지금"},
                    {id: 4, usrId: "bb_87y", imgSrc: "/images/story-el-img.jpg", src: "http://instagram.com/bb_87y", time: "지금"},
                    {id: 5, usrId: "bb_87y", imgSrc: "/images/story-el-img.jpg", src: "http://instagram.com/bb_87y", time: "지금"},
                    {id: 6, usrId: "bb_87y", imgSrc: "/images/story-el-img.jpg", src: "http://instagram.com/bb_87y", time: "지금"},
                    {id: 7, usrId: "bb_87y", imgSrc: "/images/story-el-img.jpg", src: "http://instagram.com/bb_87y", time: "지금"},
                    {id: 8, usrId: "bb_87y", imgSrc: "/images/story-el-img.jpg", src: "http://instagram.com/bb_87y", time: "지금"}
                ]
            }
        };
    }

    render() {
        return(
            <div className="body">
                <Nav />
                <main>
                    <FeedPost userData={this.state.userData} />
                    <Aside userData={this.state.userData} />
                </main>
            </div>
        );
    }
}

export default Feed;