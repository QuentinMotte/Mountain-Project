import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../component/Footer";
import Header from "../component/Header";
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

interface UserProfiles {
  avatar: string;
  createdAt: string;
  favorite: Array<any>;
  historic: Array<any>;
  id_user: string;
  is_young: boolean;
  pin_code: string;
  pseudo: string;
  quote: string;
  updatedAt: string;
  watchlist: Array<any>;
  _id: string;
}

const id = localStorage.getItem("user");

function SelectProfile() {
  const [profiles, setProfiles] = React.useState<UserProfiles[]>([]);

  React.useEffect(() => {
    axios
      .get(`http://localhost:5000/api/profile/allProfiles/${id}`)
      .then((res) => {
        setProfiles(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function matchAvatar(avatar: string) {
    switch (avatar) {
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
        return AvatarAsuka;
    }
  }

  function handleChoiseProfile(id: string) {
    localStorage.setItem("profile", id);
    window.location.href = "/Home";
  }

  return (
    <>
      <Header></Header>
      <h1 className="title">Choisis ton profil</h1>
      <main className="content-container content-container-selectProfil">
        {profiles.length === 0 ? (
          <>
            <p className="no-profile">You have no profile yet !</p>
          </>
        ) : profiles.length === 1 || profiles.length === 2 ? (
          profiles.map((profile) => (
            <>
              <div className="select-profile">
                <a
                  className="profile-link"
                  onClick={() => handleChoiseProfile(profile._id)}
                >
                  <img
                    src={matchAvatar(profile.avatar)}
                    alt="avatar"
                    className="profile-avatar"
                  />
                </a>
                <p className="profile-pseudo">{profile.pseudo}</p>
              </div>
            </>
          ))
        ) : profiles.length === 3 ? (
          profiles.map((profile) => (
            <>
              <div className="select-profile">
                <NavLink
                  to="/home"
                  className="profile-link"
                  onClick={() => handleChoiseProfile(profile._id)}
                >
                  <img
                    src={matchAvatar(profile.avatar)}
                    alt="avatar"
                    className="profile-avatar"
                  />
                </NavLink>
                <p className="profile-pseudo">{profile.pseudo}</p>
              </div>
            </>
          ))
        ) : (
          <p>Vous avez atteint le nombre maximum de profil</p>
        )}
        {profiles.length < 3 ? (
          <div className="profile-another">
            <NavLink to="/create-profile">
              <i className="fa-sharp fa-solid fa-plus"></i>
            </NavLink>
          </div>
        ) : (
          <></>
        )}
      </main>
      <Footer></Footer>
    </>
  );
}

export default SelectProfile;
