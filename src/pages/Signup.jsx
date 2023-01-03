import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineLeft, AiFillExclamationCircle, AiOutlineDown, AiFillDownCircle } from "react-icons/ai";
import NavigationBar from '../components/NavigationBar'

const Signup = () => {

  return (
    <div className="base signup">
        <div className="top">
            <div className="layoutfix">
                <NavigationBar/>
                <div className="mainTitle">
                    <h3>Welcome</h3>
                    <p>
                        나만의 새로운 지갑을 만들어요! <br></br>
                        회원가입과 동시에 지갑을 만드세요.
                    </p>
                </div>
            </div>
        </div>
        <div className="bottomBg">
            <div className="bottom">
                <div className="layoutfix">
                    <div className="content">
                        <ul>
                            <li>
                                <h5>아이디</h5>
                                <input type="text" name="" id="" placeholder='변경할 비밀번호를 입력해 주세요.'/>
                                <button className="btn2">인증하기</button>
                            </li>
                            <li>
                                <h5>인증번호</h5>
                                <div className="timerBox">
                                    <input type="text" name="" id="" placeholder="인증번호 입력"/>
                                    <em>03:02</em>
                                </div>
                            </li>
                            <li>
                                <h5>비밀번호</h5>
                                <input type="text" name="" id="" placeholder="Password"/>
                                <div className="alertBox-noLine">
                                    <AiFillExclamationCircle/>
                                    <em>최소 10자 최대 20자 이내로 입력해 주세요.</em>
                                </div>
                            </li>
                            <li>
                                <h5>비밀번호 확인</h5>
                                <input type="text" name="" id="" placeholder="Password Confirm"/>
                            </li>
                            <li>
                                <h5>출금 비밀번호</h5>
                                <input type="text" name="" id="" placeholder="출금 비밀번호"/>
                                <div className="alertBox-noLine">
                                    <AiFillExclamationCircle/>
                                    <em>6자리까지 입력해 주세요.</em>
                                </div>
                            </li>
                            <li>
                                <h5>서비스 이용약관 동의</h5>
                                <a href="">
                                    <AiOutlineDown/>
                                </a>
                                <div className="agreeBox active">
                                    <a href="">
                                        <AiFillDownCircle/>
                                        <em>동의합니다.</em>
                                    </a>
                                </div>
                            </li>
                        </ul>
                        <button className="btn1">가입하기</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Signup;
