import React, { Component } from "react";
import AsideStoryElement from "./Aside-story-element";

class Aside extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // map() 메소드는 파라미터로 전달된 함수를 통해 배열내 각 요소를 프로세싱하여 그 결과로 새로운 배열을 생성
    // arr.map(callback, [thisArg])
    // callback은 다시 currentValue(현재 처리되는 요소), index(cV의 인덱스), array(메소드가 불려진 배열) 세 가지 인수를 가짐

    // map() 함수는 각 배열의 요소를 돌면서 인자로 전달된 함수를 사용,
    // 처리된 새로운 결과를 새로운 배열에 담아 반환하는 함수
    // const menus = ["Menu1", "Menu2", "Menu3", "Menu4"]
    // const menuList = menus.map((menu) => (<li>{menu}</li>));

    const { myId, myUsrId, myImgSrc, mySrc, myName } = this.props.userData.myAccount;
    const { asideId, asideUsrId, asideImgSrc, asideSrc, asideTime } = this.props.userData.aside;
    const { id, usrId, imgSrc, src, time } = this.props.userData.storyData;
    const { storyData } = this.props.userData;
    console.log(storyData)
    const liDatas = ['Instagram 정보', '도움말', '홍보 센터', 'API', '채용 정보', '개인정보처리방침', '약관', '디렉터리', '프로필', '해시태그', '언어'];
    const liDataList = liDatas.map((liData) => { return <li>{liData}</li>});

    const storyUsrList = storyData.map((storyUsr) => { return (<AsideStoryElement 
      key={storyUsr.id}
      usrId={storyUsr.usrId}
      imgSrc={storyUsr.imgSrc}
      src={storyUsr.src}
      time={storyUsr.time}
    />)});

    return (
      <aside className="main-right">
        <div className="aside-profile">
          <div>
            <img
              alt="falsekind_님의 프로필 사진"
              className="_6q-tv"
              src={myImgSrc}
            />
          </div>
          <div className="profile-container">
            <div>
              <a href={myImgSrc}>{myUsrId}</a>
            </div>
            <div className="profile-bottom-nickname">{myName}</div>
          </div>
        </div>
        <div className="aside-story">
          <div className="aside-story-top">
            <div className="story-left">스토리</div>
            <div className="story-right">
              <a href="">모두 보기</a>
            </div>
          </div>
          <div className="aside-story-bottom">
            {/* <AsideStoryElement
              id={asideId}
              usrId={asideUsrId}
              imgSrc={asideImgSrc}
              src={asideSrc}
              time={asideTime}
            /> */}
            {storyUsrList}
          </div>
        </div>
        <div className="aside-recommend">
          <div className="aside-recommend-top">
            <div className="story-left">회원님을 위한 추천</div>
            <div className="story-right">
              <a href="">모두 보기</a>
            </div>
          </div>
          <div className="aside-recommend-bottom">
            <AsideStoryElement
              id={asideId}
              usrId={asideUsrId}
              imgSrc={asideImgSrc}
              src={asideSrc}
              time={asideTime}
            />         
          </div>
        </div>
        <div>
          <ul>
            {liDataList}
          </ul>
        </div>
      </aside>
    );
  }
}

export default Aside;
