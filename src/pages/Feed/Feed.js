import React, { Component } from 'react';
import Nav from '../../components/Nav';
import FeedMain from './Feed-main';
import Aside from './Aside';

class Feed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: {
                aside: {
                    id: 1,
                    usrId: "bb_87y",
                    imgSrc: "/images/story-el-img.jpg",
                    src: "http://instagram.com/bb_87y",
                    time: "지금"
                },
                myAccount: {
                    id: 1,
                    usrId: "falsekind_",
                    imgSrc: "/images/my-profile-img.jpg",
                    src: "http://instagram.com/falsekind_",
                    name: "오종"
                },
                storyData: [
                    {id: 1, usrId: "bb_87y", imgSrc: "/images/story-el-img.jpg", src: "http://instagram.com/bb_87y", time: "지금"},
                    {id: 2, usrId: "bb_87y", imgSrc: "/images/story-el-img.jpg", src: "http://instagram.com/bb_87y", time: "지금"},
                    {id: 3, usrId: "bb_87y", imgSrc: "/images/story-el-img.jpg", src: "http://instagram.com/bb_87y", time: "지금"},
                    {id: 4, usrId: "bb_87y", imgSrc: "/images/story-el-img.jpg", src: "http://instagram.com/bb_87y", time: "지금"},
                    {id: 5, usrId: "bb_87y", imgSrc: "/images/story-el-img.jpg", src: "http://instagram.com/bb_87y", time: "지금"},
                    {id: 6, usrId: "bb_87y", imgSrc: "/images/story-el-img.jpg", src: "http://instagram.com/bb_87y", time: "지금"},
                    {id: 7, usrId: "bb_87y", imgSrc: "/images/story-el-img.jpg", src: "http://instagram.com/bb_87y", time: "지금"},
                    {id: 8, usrId: "bb_87y", imgSrc: "/images/story-el-img.jpg", src: "http://instagram.com/bb_87y", time: "지금"},
                ]
            }
        };
    }

    render() {
        console.log(this.state.승윤);
        return(
            <div>
                <Nav />
                <FeedMain userData={this.state.userData}/>
                <Aside userData={this.state.userData}/>
            </div>
        );
    }
}

export default Feed;