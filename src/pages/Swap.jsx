import React from 'react'
import { AiOutlineLeft} from "react-icons/ai";
import NavigationBar from '../components/NavigationBar'

const Swap = () => {
  return (
    <div className='base swap'>
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
                                <li className='active'>
                                    Swap
                                </li>
                            </a>
                            <a href="SwapLog">
                                <li>
                                    내역
                                </li>
                            </a>
                        </ul>
                    </div>
                    <div className="content">
                        <h5>Swap</h5>
                        <ul className="card">
                            <a href="">
                                <li className="btc">
                                    <h4>Bitcoin</h4>
                                    <p>0 BTC</p>
                                </li>
                            </a>
                            <div className="tc">
                                <img src="/img/swapIconDown.png" alt="" />
                            </div>
                            <a href="">
                                <li className="poly">
                                    <h4>Polygon</h4>
                                    <p>0.285 MATIC</p>
                                </li>
                            </a>
                        </ul>
                        <div className="btn1">Swap</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Swap