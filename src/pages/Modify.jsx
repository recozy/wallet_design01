import React from 'react'
import { AiOutlineLeft, AiFillExclamationCircle } from "react-icons/ai";
import NavigationBar from '../components/NavigationBar'

const Modify = () => {
  return (
    <div className='base modify'>
        <div className="top">
            <div className="layoutfix">
                <NavigationBar/>
                <div className="mainTitle">
                    <h3>Help</h3>
                    <p>
                        회원님의 정보를 <br></br>
                        확인하고 수정합니다.
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
                                <div className="btn4">zmqlr0802@naver.com</div>
                            </li>
                            <li>
                                <h5>비밀번호</h5>
                                {/* 변경 클릭하면 형제 요소 pwInput에 active class 추가 */}
                                {/* 변경 클릭하면 본인 요소에 hide class 추가 */}
                                <a href="" className="btn3">변경</a>
                                <div className="pwInput active">
                                    <input type="text" name="" id="" placeholder='변경할 비밀번호를 입력해 주세요.'/>
                                    <div className="alertBox-noLine">
                                        <AiFillExclamationCircle/>
                                        <em>최소 10자 최대 20자 이내로 입력해 주세요.</em>
                                    </div>
                                    <li>
                                        <h5>비밀번호 확인</h5>
                                        <input type="text" name="" id="" placeholder='다시 한 번 입력해 주세요.'/>
                                    </li>
                                </div>
                            </li>
                            <li>
                                <h5>출금 비밀번호</h5>
                                {/* 변경 클릭하면 형제 요소 pwInput에 active class 추가 */}
                                {/* 변경 클릭하면 본인 요소에 hide class 추가 */}
                                <a href="" className="btn3">변경</a>
                                <div className="pwInput active">
                                    <input type="text" name="" id="" placeholder='변경할 비밀번호를 입력해 주세요.'/>
                                    <div className="alertBox-noLine">
                                        <AiFillExclamationCircle/>
                                        <em>최소 4자 최대 6자리 이내로 입력해 주세요.</em>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <button className="btn1">저장하기</button>
                        <button className="btn2">탈퇴하기</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Modify