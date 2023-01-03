import React from "react";
import { Link } from "react-router-dom";
import { AiOutlinePoweroff } from "react-icons/ai";

const Header = () => {
  return (
    <header>
        <h1><a href=""><img src="/img/logo.png" alt="" /></a></h1>
        <div className="sideMenu">
          <a href="">
            <AiOutlinePoweroff />
          </a>
        </div>
    </header>
  );
};

export default Header;
