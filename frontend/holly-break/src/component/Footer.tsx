import React from "react";
import { NavLink } from "react-router-dom";
import MyLogo from "../img/logo_holly_nobg.png";

function Footer() {
  return (
    <footer>
      <div>
        <a href="">
          <i className="fa-brands fa-facebook"></i>
        </a>
        <a href="">
          <i className="fa-brands fa-twitter"></i>
        </a>
        <a href="">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="">
          <i className="fa-brands fa-github"></i>
        </a>
      </div>
      <ul>
        <li>
          <NavLink to={"/About"}>About</NavLink>
        </li>
        <li>
          <NavLink to={"/Conditions"}>Conditions</NavLink>
        </li>
        <li>
          <NavLink to={"/FAQ"}>FAQ</NavLink>
        </li>
      </ul>
      <img className="hollyLogo" src={MyLogo} alt="logo" />
    </footer>
  );
}

export default Footer;
