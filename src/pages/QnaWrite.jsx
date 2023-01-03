import React from 'react'
import { AiOutlineLeft} from "react-icons/ai";
import NavigationBar from '../components/NavigationBar'

const QnaWrite = () => {
  return (
    <div className='base qnaWrite'>
        <div className="top">
            <div className="layoutfix">
                <NavigationBar/>
                <div className="mainTitle">
                    <h3>QNA</h3>
                    <p>
                        궁금하신 점에 대해<br></br>
                        자세히 말씀해 주세요!
                    </p>
                </div>
            </div>
        </div>
        <div className="bottomBg">
            <div className="bottom">
                <div className="layoutfix">
                    <div className="content">
                        <ul>
                            <li>
                                <h5>제목</h5>
                                <p>문의글의 제목을 입력해 주세요.</p>
                                <input type="text" name="" id="" placeholder='최대 000자까지 입력'/>
                            </li>
                            <li>
                                <h5>내용</h5>
                                <p>문의하실 사항을 입력해 주세요.</p>
                                <textarea name="" id="" cols="41" rows="30" placeholder='최대 000자까지 입력 가능합니다.'></textarea>
                            </li>
                        </ul>
                        <a href="" className="btn1">등록하기</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default QnaWrite