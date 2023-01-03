import React from 'react'
import { AiOutlineLeft } from "react-icons/ai";

const NavigationBar = () => {
  return (
    <div className="topTitle">
        <a href="Login">
            <AiOutlineLeft />
            <em>Sign up</em>
        </a>
    </div>
  )
}

export default NavigationBar