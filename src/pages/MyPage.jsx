import React from 'react'
import { AiOutlineLeft} from "react-icons/ai";
import NavigationBar from '../components/NavigationBar'

const MyPage = () => {
  return (
    <div className='base myPage'>
        <div className="top">
            <div className="layoutfix">
                <NavigationBar/>
                <div className="mainTitle">
                    <h4>
                        My Page<br></br>
                    </h4>
                    <p>zmqlr0802@naver.com</p>
                </div>
            </div>
        </div>
        <div className="bottomBg">
            <div className="bottom">
                <div className="layoutfix">
                    <div className="content">
                        <h5>Convenience</h5>
                        <ul className='mypageList'>
                            <a href="Address">
                                <li className='myAddress'>
                                    <p>주소록 관리</p>
                                </li>
                            </a>
                            <a href="Modify">
                                <li className='mpInfo'>
                                    <p>내 정보 수정</p>
                                </li>
                            </a>
                            <a href="Faq">
                                <li className='mpFaq'>
                                    <p>FAQ</p>
                                </li>
                            </a>
                            <a href="QnaList">
                                <li className='mpMtm'>
                                    <p>1:1 문의</p>
                                </li>
                            </a>
                            <a href="Export">
                                <li className='mpExport'>
                                    <p>비공개키</p>
                                </li>
                            </a>
                            <a href="Setting">
                                <li className='mpSetting'>
                                    <p>설정</p>
                                </li>
                            </a>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MyPage