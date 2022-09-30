import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { profile } from "console";

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

type Props = {
  isOpen: boolean;
  setIsOpen: any;
  id: string | null;
  profiles: any;
};

function SettingsProfile({ isOpen, setIsOpen, id, profiles }: Props) {
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
        return AvatarDefault;
    }
  }

  return (
    <>
      <div className="settingsProfile-Container">
        <div className="settingsProfile-subContainer">
          <i
            className="fa-solid fa-square-xmark"
            onClick={() => setIsOpen(false)}
          ></i>
        </div>
      </div>
    </>
  );
}

export default SettingsProfile;
