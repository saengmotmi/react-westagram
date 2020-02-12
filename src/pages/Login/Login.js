import React, { Component } from 'react';
import LoginForm from './Login-form'; //폴더 위치가 같으면 경로에 군살 붙이면 안됨

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "asdf",
            pwd: "asdf"
        }
    }

    render() {
        return (
            <div className="form-container">
                <img src="/images/logo.png" alt="logo" />
                <div>
                    <LoginForm id={this.state.id} pwd={this.state.pwd}/>
                </div>
                <p><a href="">비밀번호를 잊으셨나요?</a></p>
            </div>
        );
    }
}

export default Login;