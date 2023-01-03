import React from 'react'
import { AiOutlineLeft, AiFillExclamationCircle } from "react-icons/ai";
import NavigationBar from '../components/NavigationBar'

const WalletResv = () => {
  return (
    <div className='base wr'>
        <div className="top">
            <div className="layoutfix">
                <NavigationBar/>
                <div className="qrBox">
                    <img src="/img/qr.png" alt="" />
                </div>
            </div>
        </div>
        <div className="bottomBg">
            <div className="bottom">
                <div className="layoutfix">
                    <div className="midBox">
                        <b>1FH7ZbQa9Pf4V35r3tgScUi4XuFwtKDzqs</b>
                    </div>
                    <div className="alertBox">
                        <ul>
                            <li>
                                <dl>
                                    <dd><AiFillExclamationCircle /></dd>
                                    <dt>입금 주소와 일치하지 않는 코인을 전송할 경우 해당 코인을 찾을 수 없습니다.</dt>
                                </dl>
                            </li>
                            <li>
                                <dl>
                                    <dd><AiFillExclamationCircle /></dd>
                                    <dt>입금 코인 종류를 반드시 확인해 주세요!</dt>
                                </dl>
                            </li>
                        </ul>
                    </div>
                    <a href="" className='btn2'>주소 복사</a>
                    <a href="" className='btn1'>공유하기</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WalletResv