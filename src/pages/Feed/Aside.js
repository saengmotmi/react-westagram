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

    const storyUsrList = this.props.userData.storyData.map((storyUsr, index) => { return (<AsideStoryElement 
      id={storyUsr.id}
      usrId={storyUsr.usrId}
      imgSrc={storyUsr.imgSrc}
      src={storyUsr.src}
      time={storyUsr.time}
    />)});

    return (
      <div className="main-right">
        <div className="aside-profile">
          <div>
            <img
              alt="falsekind_님의 프로필 사진"
              className="_6q-tv"
              src={this.props.userData.myAccount.imgSrc}
            />
          </div>
          <div className="profile-container">
            <div>
              <a href={this.props.userData.myAccount.imgSrc}>{this.props.userData.myAccount.usrId}</a>
            </div>
            <div className="profile-bottom-nickname">{this.props.userData.myAccount.name}</div>
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
            <AsideStoryElement
              id={this.props.userData.aside.id}
              usrId={this.props.userData.aside.usrId}
              imgSrc={this.props.userData.aside.imgSrc}
              src={this.props.userData.aside.src}
              time={this.props.userData.aside.time}
            />
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
              id={this.props.userData.aside.id}
              usrId={this.props.userData.aside.usrId}
              imgSrc={this.props.userData.aside.imgSrc}
              src={this.props.userData.aside.src}
              time={this.props.userData.aside.time}
            />         
          </div>
        </div>
        <div>
          <ul>
            <li>Instagram 정보</li>
            <li>도움말</li>
            <li>홍보 센터</li>
            <li>API</li>
            <li>채용 정보</li>
            <li>개인정보처리방침</li>
            <li>약관</li>
            <li>디렉터리</li>
            <li>프로필</li>
            <li>해시태그</li>
            <li>언어</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Aside;
