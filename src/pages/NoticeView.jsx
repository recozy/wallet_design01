import React from 'react'
import { AiOutlineLeft} from "react-icons/ai";
import NavigationBar from '../components/NavigationBar'

const NoticeView = () => {
  return (
    <div className='base noticeView'>
        <div className="top">
            <div className="layoutfix">
                <NavigationBar/>
                <div className="textBox">
                    <h5>
                        제목이 들어갑니다. 제목이 들
                        어갑니다. 제목이 들어갑니다.
                        어갑니다. 제목이 들어갑니다.
                    </h5>
                    <em>2022.12.01 &nbsp; 13:00:02</em>
                </div>
            </div>
        </div>
        <div className="bottomBg">
            <div className="bottom">
                <div className="layoutfix">
                    <div className="viewContent">
                        <p>
                            1:1문의 내용입니다. 1:1문의 내용입니다. 1:1
                            문의 내용입니다.1:1문의 내용입니다. 1:1문
                            1:1문의 내용입니다.1:1문의 내용입니다.의 
                            1:1문의 내용입니다.내1:1문의 내용입니다.용
                            1:1문의 내용입니다.1:1문의 내용입니다.입니
                            1:1문의 내용입니다.1:1문의 내용입니다.1:1
                            문의 내용입니다.다.
                        </p>
                    </div>
                    <a href="NoticeList" className="btn1">목록으로</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NoticeView