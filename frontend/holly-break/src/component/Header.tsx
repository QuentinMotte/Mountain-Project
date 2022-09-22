import React from "react";
import { NavLink } from "react-router-dom";
import Connection from "./Connection";
import MyLogo from "../img/logo_holly_nobg.png";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  function logOut() {
    if (localStorage.getItem("token")) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.removeItem("admin");
      localStorage.removeItem("profile");
      window.location.href = "/";
    }
  }

  let [Search, setSearch] = useState("");

  const handleChange = (e: any) => {
    setSearch(e.target.value);
  };

  const navigate = useNavigate();

  const onClickHandlerMovie = () => navigate(`/Search/${Search}`);

  const token = localStorage.getItem("token");
  const admin = localStorage.getItem("admin") === "true";
  const profile = localStorage.getItem("profile");

  return (
    <>
      <header className="header">
        <div className="header__left">
          {token && profile ? (
            <NavLink className="logoHome" to="/Home">
              <img src={MyLogo} className="hollyLogo" alt="logo" />
            </NavLink>
          ) : token && !profile ? (
            <NavLink className="logoHome" to="/Select-Profile">
              <img src={MyLogo} className="hollyLogo" alt="logo" />
            </NavLink>
          ) : (
            <NavLink className="logoHome" to="/">
              <img src={MyLogo} className="hollyLogo" alt="logo" />
            </NavLink>
          )}

          {token && profile ? (
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
              <NavLink className="header_navLink" to={"/Forum/All"}>
                Forum
              </NavLink>

              <div className="search_box">
                <form onSubmit={onClickHandlerMovie}>
                  <input
                    type="text"
                    className="Search"
                    placeholder="type to search"
                    onChange={handleChange}
                  />
                </form>
              </div>
            </div>
          ) : null}
        </div>
        <div className="header__right">
          {token && admin ? (
            <NavLink className="navLink_right" to={"/Admin"}>
              Admin
            </NavLink>
          ) : localStorage.getItem("token") ? null : (
            <NavLink className="navLink_right" to={"/Subscription"}>
              Subscribe
            </NavLink>
          )}

          {token ? (
            <NavLink className="navLink_right" to={"/"} onClick={logOut}>
              Log Out
            </NavLink>
          ) : (
            <a className="navLink_right" onClick={() => setIsOpen(true)}>
              Log In
            </a>
          )}
        </div>
        {isOpen && <Connection isOpen={isOpen} setIsOpen={setIsOpen} />}
      </header>
    </>
  );
}

export default Header;
