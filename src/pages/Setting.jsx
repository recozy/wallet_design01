import React from 'react'
import { AiOutlineLeft, AiOutlineRight, AiFillExclamationCircle } from "react-icons/ai";
import NavigationBar from '../components/NavigationBar'

const Setting = () => {
  return (
    <div className='base setting'>
        <div className="top">
            <div className="layoutfix">
                <NavigationBar/>
                <div className="mainTitle">
                    <h4>
                        안전하고 편리한<br></br>
                        M-Linus Wallet
                    </h4>
                </div>
            </div>
        </div>
        <div className="bottomBg">
            <div className="bottom">
                <div className="layoutfix">
                    <div className="content">
                        <ul className='basicList'>
                            <li>
                                <div className='quastion'>
                                    {/* 아래 a 태그 클릭하면 otpBox에 active class 추가 부탁드립니다! */}
                                    <a href="">
                                        <h5>    
                                            Google OTP
                                            {/* Google OTP 미등록시에만 active class 추가 부탁드립니다!  */}
                                            <div className='active'>
                                                <AiOutlineRight/>
                                            </div>
                                        </h5>
                                        <p>Google OTP이 미등록 상태입니다.</p>
                                    </a>
                                    <div className='otpBox active'>
                                        <div className='qrBox'>
                                            <img src="/img/qr.png" alt="" />
                                        </div>
                                        <div className="alertBox">
                                            <ul>
                                                <li>
                                                    <dl>
                                                        <dd><AiFillExclamationCircle /></dd>
                                                        <dt>휴대전화(안드로이드)와 PC인 경우, 구글플레이에 Google OTP를 입력하여 설치해주세요.</dt>
                                                    </dl>
                                                </li>
                                                <li>
                                                    <dl>
                                                        <dd><AiFillExclamationCircle /></dd>
                                                        <dt>휴대전화(IOS)인 경우, 앱스토어 에 Google OTP(Google Authenicator)를 입력하여 설치해주세요.</dt>
                                                    </dl>
                                                </li>
                                                <li>
                                                    <dl>
                                                        <dd><AiFillExclamationCircle /></dd>
                                                        <dt>Google OTP 설치 후 접속하여, Qr또는 Key값을 복사하여 붙여넣어 등록하세요.</dt>
                                                    </dl>
                                                </li>
                                                <li>
                                                    <dl>
                                                        <dd><AiFillExclamationCircle /></dd>
                                                        <dt>등록에 앱에 나타나는 인증키 6자리를 입력하여 인증하세요.</dt>
                                                    </dl>
                                                </li>
                                            </ul>
                                        </div>
                                        {/* 아래 a 태그 클릭하면 복사할 수 있게 부탁드립니다! */}
                                        <a className="btn4">
                                            <p>DJKFKLAJ3KSD32345</p>
                                            <img src="/img/copyIcon.png" alt="" />
                                        </a>
                                        <input type="text" name="" id="" placeholder='인증번호 입력'/>
                                        <a href="" className="btn2">등록하기</a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className='quastion'>
                                    <h5>    
                                        Google OTP 로그인 인증
                                    </h5>
                                </div>
                                <input type="checkbox" name="" id="" />
                            </li>
                            <li>
                                <div className='quastion'>
                                    <h5>    
                                        E-mail 로그인 인증
                                    </h5>
                                </div>
                                <input type="checkbox" name="" id="" />
                            </li>
                            <li>
                                <div className='quastion'>
                                    <h5>    
                                        Google OTP 거래
                                    </h5>
                                </div>
                                <input type="checkbox" name="" id="" />
                            </li>
                            <li>
                                <div className='quastion'>
                                    <h5>    
                                        E-mail 거래 인증
                                    </h5>
                                </div>
                                <input type="checkbox" name="" id="" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Setting