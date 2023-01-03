import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineLeft } from "react-icons/ai";
import NavigationBar from '../components/NavigationBar'

const Find = () => {

  return (
    <div className="base find">
        <div className="top">
            <div className="layoutfix">
                <NavigationBar/>
                <div className="mainTitle">
                    <h3>Help</h3>
                    <p>
                        간단한 인증을 통해 <br></br>
                        비밀번호를 찾아요!
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
                                <h5>E-mail</h5>
                                <input type="text" name="" id="" placeholder="가입 E-mail 입력"/>
                                <button className="btn2">인증번호 전송하기</button>
                            </li>
                            <li>
                                <h5>인증번호</h5>
                                <div className="timerBox">
                                    <input type="text" name="" id="" placeholder="인증번호 입력"/>
                                    <em>03:02</em>
                                </div>
                            </li>
                        </ul>
                        <button className="btn1">인증하기</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Find;
