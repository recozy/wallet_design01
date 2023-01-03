import React from 'react'
import { AiOutlineLeft, AiOutlineDown } from "react-icons/ai";
import NavigationBar from '../components/NavigationBar'

const Faq = () => {
  return (
    <div className='base faq'>
        <div className="top">
            <div className="layoutfix">
                <NavigationBar/>
                <div className="mainTitle">
                    <h3>FAQ</h3>
                    <p>
                        자주 받은 질문에 대한 <br></br>
                        답변입니다.
                    </p>
                </div>
            </div>
        </div>
        <div className="bottomBg">
            <div className="bottom">
                <div className="layoutfix">
                    <div className="content">
                        <ul className='basicList'>
                            <li>
                                {/* a 태그 클릭하면 형제 요소 answer에 active class 추가 */}
                                <a href="">
                                    <div className='quastion'>
                                        <h5>    
                                            OTP 등록
                                            <AiOutlineDown/>
                                        </h5>
                                        <p>Google OTP 등록이 궁금해요.</p>
                                    </div>
                                </a>
                                <div className="answer active">
                                    <p>
                                        Google OTP 등록이 궁금해요.Google OTP 등록
                                        Google OTP 등록이 궁금해요.Google OTP 등록
                                        Google OTP 등록이 궁금해요.Google OTP 등록
                                        Google OTP 등록이 궁금해요.Google OTP 등록
                                        Google OTP 등록이 궁금해요.Google OTP 등록
                                        Google OTP 등록이 궁금해요.Google OTP 등록
                                        이 궁금해요.이 궁금해요.이 궁금해요.이 궁금해요.
                                        이 궁금해요.이 궁금해요.
                                    </p>
                                </div>
                            </li>
                            <li>
                                <a href="">
                                    <div className='quastion'>
                                        <h5>    
                                            OTP 등록
                                            <AiOutlineDown/>
                                        </h5>
                                        <p>Google OTP 등록이 궁금해요.</p>
                                    </div>
                                </a>
                                <div className="answer">
                                    <p>
                                        Google OTP 등록이 궁금해요.Google OTP 등록
                                        Google OTP 등록이 궁금해요.Google OTP 등록
                                        Google OTP 등록이 궁금해요.Google OTP 등록
                                        Google OTP 등록이 궁금해요.Google OTP 등록
                                        Google OTP 등록이 궁금해요.Google OTP 등록
                                        Google OTP 등록이 궁금해요.Google OTP 등록
                                        이 궁금해요.이 궁금해요.이 궁금해요.이 궁금해요.
                                        이 궁금해요.이 궁금해요.
                                    </p>
                                </div>
                            </li>
                            <li>
                                <a href="">
                                    <div className='quastion'>
                                        <h5>    
                                            OTP 등록
                                            <AiOutlineDown/>
                                        </h5>
                                        <p>Google OTP 등록이 궁금해요.</p>
                                    </div>
                                </a>
                                <div className="answer">
                                    <p>
                                        Google OTP 등록이 궁금해요.Google OTP 등록
                                        Google OTP 등록이 궁금해요.Google OTP 등록
                                        Google OTP 등록이 궁금해요.Google OTP 등록
                                        Google OTP 등록이 궁금해요.Google OTP 등록
                                        Google OTP 등록이 궁금해요.Google OTP 등록
                                        Google OTP 등록이 궁금해요.Google OTP 등록
                                        이 궁금해요.이 궁금해요.이 궁금해요.이 궁금해요.
                                        이 궁금해요.이 궁금해요.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Faq