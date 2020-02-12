import React, { Component } from 'react';

class LoginForm extends Component {
    render() {
        console.log(this.props);
        return(
            <div>
                <input id="inputid" type="input" value={this.props.id} placeholder="전화번호, 사용자 또는 이메일" /><br />
                <input id="inputpwd" type="input" value={this.props.pwd} placeholder="비밀번호" /><br />
                <input className="login-btn" type="button" value="로그인" />
            </div>
        );
    }
}

export default LoginForm; //얘가 