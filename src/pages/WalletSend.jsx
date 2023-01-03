import React from 'react'
import { AiOutlineLeft } from "react-icons/ai";
import NavigationBar from '../components/NavigationBar'

const WalletSend = () => {
  return (
    <div className='base ws'>
        <div className="top">
            <div className="layoutfix">
                <NavigationBar/>
                <div className="textBox">
                    <p>Bitcoin</p>
                    <h5>23.545643</h5>
                    <h6>보유 325.12134545435</h6>
                </div>
            </div>
        </div>
        <div className="bottomBg">
            <div className="bottom">
                <div className="layoutfix">
                    <div className="midBox">
                        <div className="content">
                            <h5>To</h5>
                            <div className="qrInput">
                                <input type="text" name="" id="" placeholder="공개주소(0x) 또는 ENS"/>
                                <a href="QrScanner">
                                    <img src="/img/qr.png" alt="" />
                                </a>
                            </div>
                            <a href="" className="btn3">내 주소록 불러오기</a>
                        </div>
                    </div>
                    <div className="card">
                        <div className="content">
                            <h5>Gas Fee</h5>
                            <ul className='gfLog'>
                                <li>
                                    <p>Limit</p>
                                    <h6>102,643</h6>
                                </li>
                                <li>
                                    <p>Price(GWEI)</p>
                                    <h6>33.5</h6>
                                </li>
                                <li>
                                    <p>Total(MATIC)</p>
                                    <h6>0.003404169</h6>
                                </li>
                                <li>
                                    <p>Max Amout</p>
                                    <h6>MATIC + 0.0034041469 MATIC</h6>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="alertBox">
                        <ul>
                            <li>
                                <p>
                                    공개주소 또는 ENS 오입력으로 인한 오송금은 책임지지 않습니다. 보내는 곳의 주소를 다시 한 번 정확히 확인해 주세요.
                                </p>
                            </li>
                        </ul>
                    </div>
                    <a href="" className="btn1">
                        보내기
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WalletSend