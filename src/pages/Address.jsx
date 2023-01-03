import React from 'react'
import { AiOutlineLeft, AiFillEdit, AiOutlineStop} from "react-icons/ai";
import NavigationBar from '../components/NavigationBar'

const Address = () => {
  return (
    <div className='base address'>
        <div className="top">
            <div className="layoutfix">
                <NavigationBar/>
                <div className="mainTitle">
                    <h4>
                        주소록 관리<br></br>
                    </h4>
                    <p>회원님의 주소록 목록입니다.</p>
                </div>
            </div>
        </div>
        <div className="bottomBg">
            <div className="bottom">
                <div className="layoutfix">
                    <ul className='addressList'>
                        <li className='btc'>
                            <div className="left"></div>
                            <div className="right">
                                <h5>유저1지갑이름</h5>
                                <a href="">
                                    <img src="/img/copyIcon.png" alt="" />
                                    <em>01212045454</em>
                                </a>
                                <div className='iconBox'>
                                    {/* AiFillEdit 아이콘 클릭시 수정할 수 있는 모달 발생 */}
                                    <a href=""><AiFillEdit/></a>
                                    {/* AiOutlineStop 아이콘 클릭시 삭제할 수 있는 모달 발생 */}
                                    <a href=""><AiOutlineStop/></a>
                                </div>
                            </div>
                        </li>
                        <li className='poly'>
                            <div className="left"></div>
                            <div className="right">
                                <h5>유저1지갑이름</h5>
                                <a href="">
                                    <img src="/img/copyIcon.png" alt="" />
                                    <em>01212045454</em>
                                </a>
                                <div className='iconBox'>
                                    <a href=""><AiFillEdit/></a>
                                    <a href=""><AiOutlineStop/></a>
                                </div>
                            </div>
                        </li>
                        <li className='eth'>
                            <div className="left"></div>
                            <div className="right">
                                <h5>유저1지갑이름</h5>
                                <a href="">
                                    <img src="/img/copyIcon.png" alt="" />
                                    <em>01212045454</em>
                                </a>
                                <div className='iconBox'>
                                    <a href=""><AiFillEdit/></a>
                                    <a href=""><AiOutlineStop/></a>
                                </div>
                            </div>
                        </li>
                    </ul>
                    {/* 추가 버튼 눌렀을 때 지갑 추가할 수 있는 모달 발생 */}
                    <a href="" className="btn2">
                        주소록 추가
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Address