import React from "react";
import { NavLink } from "react-router-dom";
import Connection from "./Connection";
import MyLogo from "../img/logo_holly_nobg.png";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import AvatarAsuka from "../img/avatar_profil/avatar_asuka.jpg";
import AvatarAsuma from "../img/avatar_profil/avatar_asuma.jpeg";
import AvatarGon from "../img/avatar_profil/avatar_gon.jpg";
import AvatarKirua from "../img/avatar_profil/avatar_kirua.jpg";
import AvatarLuffy from "../img/avatar_profil/avatar_luffysrx.jpg";
import AvatarMeliodas from "../img/avatar_profil/avatar_meliodas.jpg";
import AvatarNami from "../img/avatar_profil/avatar_nami.png";
import AvatarRobin from "../img/avatar_profil/avatar_robin.png";
import AvatarSakura from "../img/avatar_profil/avatar_sakura.jpg";
import AvatarShinra from "../img/avatar_profil/avatar_shinra.webp";
import AvatarDefault from "../img/avatar_profil/avatar_default.webp";

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

  //_____________________
  // get the profil info

  const [profil, setProfil] = useState<any>(null);

  React.useEffect(() => {
    axios
      .get(`http://localhost:5000/api/profile/${profile}`)
      .then((res) => {
        setProfil(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const profilAvatar = profil?.avatar;

  function matchAvatar(avatar: string) {
    switch (profilAvatar) {
      case "AvatarAsuka":
        return AvatarAsuka;
      case "AvatarAsuma":
        return AvatarAsuma;
      case "AvatarGon":
        return AvatarGon;
      case "AvatarKirua":
        return AvatarKirua;
      case "AvatarLuffy":
        return AvatarLuffy;
      case "AvatarMeliodas":
        return AvatarMeliodas;
      case "AvatarNami":
        return AvatarNami;
      case "AvatarRobin":
        return AvatarRobin;
      case "AvatarSakura":
        return AvatarSakura;
      case "AvatarShinra":
        return AvatarShinra;
      default:
        return AvatarDefault;
    }
  }

  const rightAvatar = matchAvatar(profilAvatar);

  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

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
              <NavLink className="header_navLink" to={"/"}>
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
          {!token ? (
            <NavLink className="navLink_right" to={"/Subscription"}>
              Subscribe
            </NavLink>
          ) : null}
          {!token ? (
            <a className="navLink_right" onClick={() => setIsOpen(true)}>
              Login
            </a>
          ) : null}
          {token && profile ? (
            <>
              <img
                className="avatar"
                src={rightAvatar}
                alt="avatar"
                onClick={() => toggleMenu()}
              />
              <div className={menu ? "menuAccordeon active" : "menuAccordeon"}>
                <ul>
                  <li>Favorites</li>
                  <li>Historic</li>
                  <li>Account Settings</li>
                  <li>Profile Settings</li>
                  <li>
                    {" "}
                    <NavLink to={"/Select-Profile"}>Switch Profile</NavLink>
                  </li>
                  <li>
                    {" "}
                    <NavLink to={"/Admin"}>Admin</NavLink>
                  </li>
                  <li>
                    {" "}
                    <NavLink to={"/"} onClick={logOut}>
                      <i className="fa-solid fa-power-off"></i>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </>
          ) : null}
        </div>
        {isOpen && <Connection isOpen={isOpen} setIsOpen={setIsOpen} />}
      </header>
    </>
  );
}

export default Header;
