import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {

  return (
    <div className="login">
        <div className="layoutfix">
            <div className="logoBox">
                <img src="/img/월렛로고1_GROUND(org).png" alt="" />
            </div>
            <div className="mid">
                <ul>
                    <li>
                        <p>E-mail</p>
                        <input type="text" name="" id="" placeholder="이메일을 입력해 주세요."/>
                    </li>
                    <li>
                        <p>Password</p>
                        <input type="text" name="" id="" placeholder="비밀번호를 입력해 주세요."/>
                    </li>
                </ul>
                <div className="pwBox">
                    <a href="/Find">비밀번호를 잊으셨나요?</a>
                </div>
                <a className="btn1" href="/">로그인</a>
            </div>
            <div className="bottom">
                <a href="Signup">아직 계정이 없으신가요? <em>Sign up</em></a>
            </div>
        </div>
    </div>
  );
};

export default Login;
