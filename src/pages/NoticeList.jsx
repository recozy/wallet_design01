import React from 'react'
import { AiOutlineLeft } from "react-icons/ai";
import NavigationBar from '../components/NavigationBar'

const NoticeList = () => {
  return (
    <div className='base noticeList'>
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
                    <div className="content basic">
                        <ul>
                            <li>
                                <a href="NoticeView">
                                    <h5>    
                                        공지사항제목입니다.제목은 한줄로만 간략이 보입니다다다다다
                                    </h5>
                                    <p>내용도 한줄로만 간략히 보입니다다다다다다다다다</p>
                                    <h6>2022.12.01 13:00:02</h6>
                                </a>
                            </li>
                            <li>
                                <a href="NoticeView">
                                    <h5>    
                                        공지사항제목입니다.제목은 한줄로만 간략이 보입니다다다다다
                                    </h5>
                                    <p>내용도 한줄로만 간략히 보입니다다다다다다다다다</p>
                                    <h6>2022.12.01 13:00:02</h6>
                                </a>
                            </li>
                            <li>
                                <a href="NoticeView">
                                    <h5>    
                                        공지사항제목입니다.제목은 한줄로만 간략이 보입니다다다다다
                                    </h5>
                                    <p>내용도 한줄로만 간략히 보입니다다다다다다다다다</p>
                                    <h6>2022.12.01 13:00:02</h6>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NoticeList