import React from 'react'
import { AiOutlineLeft} from "react-icons/ai";
import NavigationBar from '../components/NavigationBar'

const SwapLog = () => {
  return (
    <div className='base sl'>
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
                    <div className="midBox np">
                        <ul className="midMenu">
                            <a href="Swap">
                                <li>
                                    Swap
                                </li>
                            </a>
                            <a href="SwapLog">
                                <li className='active'>
                                    내역
                                </li>
                            </a>
                        </ul>
                    </div>
                    <div className="content">
                        <h5>내역</h5>
                        <ul className="card swapLog">
                            <li>
                                <div className="tab">
                                    <em>교환준비중</em>
                                    <div className="timeBox">
                                        <em>2022-12-22</em>
                                        <em>00:00:00</em>
                                    </div>
                                </div>
                                <div className="mainLayer">
                                    <div className="half">
                                        <h5>ETH</h5>
                                        <p>0.001 ETH</p>
                                    </div>
                                    <div className="half tiny">
                                        <img src="/img/circleRight.png" alt="" />
                                    </div>
                                    <div className="half">
                                        <h5>Polygon</h5>
                                        <p>2.2640 MATIC</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="tab">
                                    <em className='complete'>교환완료</em>
                                    <div className="timeBox">
                                        <em>2022-12-22</em>
                                        <em>00:00:00</em>
                                    </div>
                                </div>
                                <div className="mainLayer">
                                    <div className="half">
                                        <h5>ETH</h5>
                                        <p>0.001 ETH</p>
                                    </div>
                                    <div className="half tiny">
                                        <img src="/img/circleRight.png" alt="" />
                                    </div>
                                    <div className="half">
                                        <h5>Polygon</h5>
                                        <p>2.2640 MATIC</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="tab">
                                    <em className='complete'>교환완료</em>
                                    <div className="timeBox">
                                        <em>2022-12-22</em>
                                        <em>00:00:00</em>
                                    </div>
                                </div>
                                <div className="mainLayer">
                                    <div className="half">
                                        <h5>ETH</h5>
                                        <p>0.001 ETH</p>
                                    </div>
                                    <div className="half tiny">
                                        <img src="/img/circleRight.png" alt="" />
                                    </div>
                                    <div className="half">
                                        <h5>Polygon</h5>
                                        <p>2.2640 MATIC</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="tab">
                                    <em className='complete'>교환완료</em>
                                    <div className="timeBox">
                                        <em>2022-12-22</em>
                                        <em>00:00:00</em>
                                    </div>
                                </div>
                                <div className="mainLayer">
                                    <div className="half">
                                        <h5>ETH</h5>
                                        <p>0.001 ETH</p>
                                    </div>
                                    <div className="half tiny">
                                        <img src="/img/circleRight.png" alt="" />
                                    </div>
                                    <div className="half">
                                        <h5>Polygon</h5>
                                        <p>2.2640 MATIC</p>
                                    </div>
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

export default SwapLog