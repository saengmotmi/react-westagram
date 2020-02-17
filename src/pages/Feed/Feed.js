import React, { Component } from 'react';
import Nav from '../../components/Nav';
import FeedPost from './Feed-post';
import Aside from './Aside';

class Feed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postData: [
                {myId: 1, myUsrId: "falsekind_", myImgSrc: "/images/my-profile-img.jpg", mySrc: "http://instagram.com/falsekind_", myPostImgSrc: "/images/my-image.jpg", postBody: "갑자기 분위기 미국 (가로버전) pic by @minje.55"},
                {myId: 2, myUsrId: "falsekind_", myImgSrc: "/images/my-profile-img.jpg", mySrc: "http://instagram.com/falsekind_", myPostImgSrc: "/images/1.jpg", postBody: "올해 첫눈"},
                {myId: 3, myUsrId: "bb_87y", myImgSrc: "/images/story-el-img.jpg", mySrc: "http://instagram.com/bb_87y", myPostImgSrc: "/images/2.jpg", postBody: "'타하티의 연인들' 하고 싶은데 눈이 피곤해🙈 #클리어🙆🏻 #부지발의무도회 #🏠 #stickerart"}
            ],
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
                storyData:[
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
        const postDataList = this.state.postData.map((param, idx) => { return (<FeedPost
            key={idx+"article"}
            myUsrId={param.myUsrId}
            myImgSrc={param.myImgSrc}
            mySrc={param.mySrc}
            myPostImgSrc={param.myPostImgSrc}
            postBody={param.postBody}
        />)});

        return(
            <div className="body">
                <Nav />
                <main>
                    <div className="feeds">
                        {postDataList}
                    </div>
                    <Aside userData={this.state.userData} />
                </main>
            </div>
        );
    }
}

export default Feed;