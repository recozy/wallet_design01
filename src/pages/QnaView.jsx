import React from 'react'
import { AiOutlineLeft} from "react-icons/ai";
import NavigationBar from '../components/NavigationBar'

const QnaView = () => {
  return (
    <div className='base qnaView'>
        <div className="top">
            <div className="layoutfix">
                <NavigationBar/>
                <div className="textBox">
                    <h5>
                        제목이 들어갑니다. 제목이 들
                        어갑니다. 제목이 들어갑니다.
                        어갑니다. 제목이 들어갑니다.
                    </h5>
                    <em>답변대기</em>
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
                        {/* 답변 있을 때 card answer에 active class 부여해 주세요...! */}
                        <div className="card answer active">1:1문의 답변입니다. 1:1문의 답변입니다.1:1문의 답변입니다.1:1문의 답변입니다.1:1문의 답변입니다.1:1문의 답변입니다.1:1문의 답변입니다.1:1문의 답변입니다.</div>
                    </div>
                    <a href="QnaList" className="btn1">목록으로</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default QnaView