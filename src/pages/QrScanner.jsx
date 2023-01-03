import React from 'react'
import { AiOutlineLeft} from "react-icons/ai";
import NavigationBar from '../components/NavigationBar'

const QrScanner = () => {
  return (
    <div className='base qs'>
        <div className="top">
            <div className="layoutfix">
                <NavigationBar/>
            </div>
        </div>
        <div className="bottomBg">
            <div className="bottom">
                <div className="layoutfix">
                </div>
            </div>
        </div>
    </div>
  )
}

export default QrScanner