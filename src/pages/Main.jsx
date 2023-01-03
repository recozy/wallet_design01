import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineDown, AiOutlineRight } from "react-icons/ai";

const Main = () => {

  return (
    <div className="base main">
        <div className="top">
            <div className="layoutfix">
                <div className="mainTitle">
                    <p>회원님 반갑습니다.</p>
                    <h4>
                        M-GROUND <br></br>
                        WALLET
                    </h4>
                </div>
                <div className="noticeBox">
                    <a href="">
                        <img src="/img/noticeIcon.png" alt="" />
                        <a href="NoticeView">
                            <em>공지사항 제목입니다.</em>
                        </a>
                        <AiOutlineRight/>
                    </a> 
                </div>
            </div>
        </div>
        <div className="bottomBg">
            <div className="bottom">
                <div className="layoutfix">
                    <ul className="card">
                        <a href="WalletDetail">
                            <li className="btc">
                                <h4>Bitcoin</h4>
                                <p>0 BTC</p>
                            </li>
                        </a>
                        <a href="WalletDetail">
                            <li className="eth">
                                    <h4>Etherium</h4>
                                    <p>0.349 ETH</p>
                            </li>
                        </a>
                        <a href="WalletDetail">
                            <li className="poly">
                                <h4>Polygon</h4>
                                <p>0.285 MATIC</p>
                            </li>
                        </a>
                        <a href="WalletDetail">
                            <li className="mlns">
                                <h4>M-Linus</h4>
                                <p>0 MLNS</p>
                            </li>
                        </a>
                    </ul>
                    <p>카드를 클릭하면 여러 기능을 이용할 수 있어요!</p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Main;
