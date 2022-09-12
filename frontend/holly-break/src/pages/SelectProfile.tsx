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
const id_user: any = id?.replace(/['"]+/g, "");

function SelectProfile() {
  const [profiles, setProfiles] = React.useState<UserProfiles[]>([]);

  React.useEffect(() => {
    axios
      .get(`http://localhost:5000/api/profile/allProfiles/${id_user}`)
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

  return (
    <>
      <Header></Header>
      <main className="content-container">
        <h1 className="title">Choisis ton profil</h1>
        {profiles.length > 0 ? (
          profiles.map((profile) => (
            <>
              <div className="select-profile">
                <img
                  src={matchAvatar(profile.avatar)}
                  alt="avatar"
                  className="profile-avatar"
                />
                <p className="profil-pseudo">{profile.pseudo}</p>
              </div>
            </>
          ))
        ) : (
          <p>Vous n'avez pas encore de profil</p>
        )}
      </main>
      <Footer></Footer>
    </>
  );
}

export default SelectProfile;
