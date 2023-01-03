import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineLeft, AiFillExclamationCircle } from "react-icons/ai";
import NavigationBar from '../components/NavigationBar'

const FindResult = () => {

  return (
    <div className="base findResult">
        <div className="top">
            <div className="layoutfix">
                <NavigationBar/>
                <div className="mainTitle">
                    <h3>Help</h3>
                    <p>
                        비밀번호를 찾았어요! <br></br>
                        하단의 정보를 확인해 주세요.
                    </p>
                </div>
            </div>
        </div>
        <div className="bottomBg">
            <div className="bottom">
                <div className="layoutfix">
                    <div className="midBox st2">
                        <div className="content">
                            <ul className="info">
                                <li>
                                    <h5>회원 정보</h5>
                                    <dl>
                                        <dd>E-mail</dd>
                                        <dt>zmqlr0802@naver.com</dt>
                                    </dl>
                                    <dl>
                                        <dd>Password</dd>
                                        <dt>zmqlr0802</dt>
                                    </dl>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="alertBox">
                        <ul>
                            <li>
                                <dl>
                                    <dd><AiFillExclamationCircle /></dd>
                                    <dt>비밀번호 재설정시 마이페이지에서 변경해 주세요!</dt>
                                </dl>
                            </li>
                        </ul>
                    </div>
                    <a href="Login" className="btn1">로그인</a>
                </div>
            </div>
        </div>
    </div>
  );
};

export default FindResult;
