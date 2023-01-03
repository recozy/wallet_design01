import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { AiOutlineLeft } from "react-icons/ai";
import NavigationBar from '../components/NavigationBar'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper";


const Export = () => {
  return (
    <div className='base export'>
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
                <Swiper
                    slidesPerView={1}
                    centeredSlides={true}
                    grabCursor={true}
                    className="mySwiper"
                    loop={true}
                    modules={[EffectCards]}
                    effect={"cards"}
                >
                    <SwiperSlide>
                        <div className="wlCard poly">
                            <h5>Polygon</h5>
                            <div className="qrBox">
                                <img src="/img/qr.png" alt="" />
                            </div>
                            <a href="" className="exportBtn">비공개키 내보내기</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="wlCard mlnsMatic">
                            <h5>MLNS MATICE</h5>
                            <div className="qrBox">
                                <img src="/img/qr.png" alt="" />
                            </div>
                            <a href="" className="exportBtn">비공개키 내보내기</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="wlCard eth">
                            <h5>Etherium</h5>
                            <div className="qrBox">
                                <img src="/img/qr.png" alt="" />
                            </div>
                            <a href="" className="exportBtn">비공개키 내보내기</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="wlCard btc">
                            <h5>Bitcoin</h5>
                            <div className="qrBox">
                                <img src="/img/qr.png" alt="" />
                            </div>
                            <a href="" className="exportBtn">비공개키 내보내기</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="wlCard mlnsEth">
                            <h5>MLNS ETH</h5>
                            <div className="qrBox">
                                <img src="/img/qr.png" alt="" />
                            </div>
                            <a href="" className="exportBtn">비공개키 내보내기</a>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <p>버튼 클릭하면 기능을 이용할 수 있어요!</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Export