import React, { Component } from 'react';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            pwd: ""
        }
    }

    validCheck = () => {
        // console.log(this.state.valid); // 애로우 펑션 안쓸거면 bind(this) 써야 함
        if (event.target.id === "inputid") {
            this.setState({id: event.target.value});
        } else {
            this.setState({pwd: event.target.value});
        }
    }

    render() {
        return(
            <div>
                <input onChange={this.validCheck} id="inputid" type="input" placeholder="전화번호, 사용자 또는 이메일" /><br />
                <input onChange={this.validCheck} id="inputpwd" type="input" placeholder="비밀번호" /><br />
                {this.state.id.length * this.state.pwd.length === 0
                    ? (<input className="login-btn" type="button" value="로그인" />) //true
                    : (<input className="login-btn valid" type="button" value="로그인" />) // false
                }
                {/* {삼항연산자 ? : } */}
            </div>
        );
    }
}

export default LoginForm; //얘가 