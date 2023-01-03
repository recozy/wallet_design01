import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineLeft} from "react-icons/ai";
import NavigationBar from '../components/NavigationBar'

const WalletDetail = () => {
  return (
    <div className='base wd'>
        <div className="top">
            <div className="layoutfix">
                <NavigationBar/>
                <div className="card">
                    <h5>Bitcoin</h5>
                    <p>0 BTC</p>
                    <em>￦0</em>
                    <em>1BTC = ￦21,711,094.72</em>
                </div>
            </div>
        </div>
        <div className="bottomBg">
            <div className="bottom">
                <div className="layoutfix">
                    <div className="midBox">
                        <ul className="midMenu">
                            <a href="WalletResv">
                                <li>
                                    받기
                                </li>
                            </a>
                            <a href="WalletSend">
                                <li>
                                    보내기
                                </li>
                            </a>
                        </ul>
                    </div>
                    <div className="card">
                        <div className="content">
                            <h5>내역</h5>
                            <ul className="log">
                                <li>
                                    <div className="stateBox">
                                        <img src="/img/sendIcon.png" alt="" />
                                    </div>
                                    <div className="timeBox">
                                        <h5>2022-12-01</h5>
                                        <p>12:20:33</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="stateBox">
                                        <img src="/img/sendIcon.png" alt="" />
                                    </div>
                                    <div className="timeBox">
                                        <h5>2022-12-01</h5>
                                        <p>12:20:33</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="stateBox">
                                        <img src="/img/sendIcon.png" alt="" />
                                    </div>
                                    <div className="timeBox">
                                        <h5>2022-12-01</h5>
                                        <p>12:20:33</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="stateBox">
                                        <img src="/img/reciveIcon.png" alt="" />
                                    </div>
                                    <div className="timeBox">
                                        <h5>2022-12-01</h5>
                                        <p>12:20:33</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default WalletDetail;
