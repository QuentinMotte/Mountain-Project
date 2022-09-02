import React from "react";
import { NavLink } from "react-router-dom";
import Connection from "./Connection";
import MyLogo from "../img/logo_holly_nobg.png";

function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <header className="header">
        <div className="header__left">
          <NavLink className="logoHome" to={"/Home"}>
            <img className="hollyLogo" src={MyLogo} alt="logo" />
          </NavLink>
          <div className="navLink_container">
            <NavLink className="header_navLink" to={"/Home/Movies"}>
              Movies
            </NavLink>
            <NavLink className="header_navLink" to={"/Home/Series"}>
              Series
            </NavLink>
            <NavLink className="header_navLink" to={"/Watchlist"}>
              Watchlist
            </NavLink>
            <NavLink className="header_navLink" to={"/"}>
              Forum
            </NavLink>
          </div>
        </div>
        <div className="header__right">
          <NavLink className="navLink_right" to={"/Subscription"}>
            Subscribe
          </NavLink>
          <a className="navLink_right" onClick={() => setIsOpen(true)}>
            Login
          </a>
        </div>
        {isOpen && <Connection isOpen={isOpen} setIsOpen={setIsOpen} />}
      </header>
    </>
  );
}

export default Header;
