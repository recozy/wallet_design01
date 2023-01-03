import React from 'react'

const Footer = () => {
  return (
    <div className="tabMenuBox backBg">
            <div className="tabMenu">
                <div className="layoutfix">
                    <ul>
                        <li>
                            <a href="Swap">
                                <img src="/img/swapIcon.png" alt="" />
                                <p>Swap</p>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <img src="/img/homeIcon.png" alt="" />
                                <p>Wallet</p>
                            </a>
                        </li>
                        <li>
                            <a href="Mypage">
                                <img src="/img/mypageIcon.png" alt="" />
                                <p>My</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
  )
}

export default Footer