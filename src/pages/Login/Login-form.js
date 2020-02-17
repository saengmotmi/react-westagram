import React, { Component } from 'react';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            pwd: "",
            valid: false
        }
    }

    validCheck = () => {
        // console.log(this.state.valid); // 애로우 펑션 안쓸거면 bind(this) 써야 함
        if (event.target.id === "inputid") {
            this.state.id = event.target.value; // 방식1
            this.setValid();
        } else {
            this.state.pwd = event.target.value;
            this.setValid();
        }
    }

    setValid = () => { //setState는 중첩해서 쓰면 안됨
        if ((this.state.id.length * this.state.pwd.length) === 0) {
            this.setState({valid: false}) //방식2 -> 방식 1, 2 사이의 차이가...
        } else {
            this.setState({valid: true})
        }
    }

    render() {
        return(
            <div>
                <input onChange={this.validCheck} id="inputid" type="input" placeholder="전화번호, 사용자 또는 이메일" /><br />
                <input onChange={this.validCheck} id="inputpwd" type="input" placeholder="비밀번호" /><br />
                {this.state.valid ? (<input className="login-btn valid" type="button" value="로그인" />) : (<input className="login-btn" type="button" value="로그인" />)}
                {/* {삼항연산자 ? : } */}
                {console.log(this.state.valid)}
            </div>
        );
    }
}

export default LoginForm; //얘가 