import React from "react";
import { NavLink } from "react-router-dom";
import MyLogo from "../img/logo_holly_nobg.png";

function Header() {
  return (
    <>
      <header className="header">
        <div className="header__left">
          <div className="logoContainer">
            <NavLink className="logoHome" to={"/About"}>
              <img className="hollyLogo" src={MyLogo} alt="logo" />
            </NavLink>
          </div>
        </div>
        <div className="header__right">
          <ul>
            <li>
              <NavLink to={"/Subscribtion"}>Subscribe</NavLink>
            </li>
            <li>
              <NavLink to={"/Home"}>Login</NavLink>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}

export default Header;
