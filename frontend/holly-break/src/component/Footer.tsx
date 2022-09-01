import React from "react";
import { NavLink } from "react-router-dom";
import MyLogo from "../img/logo_holly_nobg.png";

function Footer() {
  return (
    <footer id="footer">
      <div>
        <a href="exemple.com">
          <i className="fa-brands fa-facebook"></i>
        </a>
        <a href="exemple.com">
          <i className="fa-brands fa-twitter"></i>
        </a>
        <a href="exemple.com">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="exemple.com">
          <i className="fa-brands fa-github"></i>
        </a>
      </div>
      <ul>
        <li>
          <NavLink className="link" to={"/About"}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to={"/Conditions"}>
            Conditions
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to={"/FAQ"}>
            FAQ
          </NavLink>
        </li>
      </ul>
      <img className="hollyLogo" src={MyLogo} alt="logo" />
    </footer>
  );
}

export default Footer;
