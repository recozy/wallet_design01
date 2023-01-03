import React from 'react'
import NavigationBar from '../components/NavigationBar'

const QnaList = () => {
  return (
    <div className='base qnaList'>
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
                            <a href="QnaList">
                                <li className='active'>
                                    전체보기
                                </li>
                            </a>
                            <a href="QnaList">
                                <li>
                                    답변완료
                                </li>
                            </a>
                            <a href="QnaList">
                                <li>
                                    답변대기
                                </li>
                            </a>
                        </ul>
                    </div>
                    <div className="content basic">
                        <ul>
                            <li className='complete'>
                                <a href="QnaView">
                                    <h5>    
                                        답변완료
                                    </h5>
                                    <p>제목은 한줄로만 간략히 보입니다다다다다다다다다</p>
                                    <h6>2022.12.01 13:00:02</h6>
                                </a>
                            </li>
                            <li>
                                <a href="QnaView">
                                    <h5>    
                                        답변대기
                                    </h5>
                                    <p>제목은 한줄로만 간략히 보입니다다다다다다다다다</p>
                                    <h6>2022.12.01 13:00:02</h6>
                                </a>
                            </li>
                            <li>
                                <a href="QnaView">
                                    <h5>    
                                        답변대기
                                    </h5>
                                    <p>제목은 한줄로만 간략히 보입니다다다다다다다다다</p>
                                    <h6>2022.12.01 13:00:02</h6>
                                </a>
                            </li>
                        </ul>
                        <a href="QnaWrite" className="btn1">문의하기</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default QnaList