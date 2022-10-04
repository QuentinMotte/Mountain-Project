import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../component/Footer";
import Header from "../component/Header";
import axios from "axios";
import useRef from "react";

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

import SettingsProfile from "./SettingsProfile";

interface UserDatas {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  birthday: number;
  createdAt: string;
  id_profiles: Array<string>;
  is_admin: boolean;
}
interface UserProfiles {
  avatar: string;
  createdAt: string;
  favorites_movie: Array<string>;
  favorites_serie: Array<string>;
  historic_movie: Array<string>;
  historic_serie: Array<string>;
  id_user: string;
  is_young: boolean;
  pin_code: string | null;
  pseudo: string;
  quote: string;
  updatedAt: string;
  watchList_movie: Array<string>;
  watchList_serie: Array<string>;
  _id: string;
}

function SettingsPage() {
  const id = localStorage.getItem("user");

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

  //_____________________
  //___GET USER DATA_____
  //_____________________

  const [user, setUser] = React.useState<UserDatas>({
    _id: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    birthday: 0,
    createdAt: "",
    id_profiles: [],
    is_admin: false,
  });
  React.useEffect(() => {
    axios.get(`http://localhost:5000/api/user/${id}`).then((response) => {
      setUser(response.data);
    });
  }, []);

  const creationDate = new Date(user.createdAt);
  const creationDateFormated = creationDate.toLocaleDateString("en-EN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  //______________________
  //____GET PROFILES______
  //______________________

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

  //______________________
  //___DELETE PROFILE_____
  //______________________

  function deleteUser(id: string) {
    axios.delete(`http://localhost:5000/api/user/${id}`).then((response) => {
      alert(response.data.message);
      window.location.reload();
    });
  }

  function alertDelete(id: string) {
    if (window.confirm("Are you sure you want to delete this user?")) {
      deleteUser(id);
    }
  }

  function deleteProfile(id: string) {
    axios.delete(`http://localhost:5000/api/profile/${id}`).then((response) => {
      setProfiles(profiles.filter((profile) => profile._id !== id));
    });
  }
  function deleteIdProfile(id: string) {
    axios.patch(`http://localhost:5000/api/user/removeProfile/${id}`);
  }

  function alertDeleteProfile(id: string) {
    if (window.confirm("Are you sure you want to delete this profile?")) {
      deleteProfile(id);
      deleteIdProfile(id);
    }
  }

  //______________________
  //___OPEN MODAL EDIT____
  //______________________

  const [isOpen, setIsOpen] = React.useState(false);

  //______________________
  //___PROFILES INFO _____
  //______________________

  return (
    <>
      <Header />
      <h1>Setting Page</h1>
      <main className="content-container content-container-settings">
        <div className="settingsContainer-left">
          <div className="left-name">
            <p>Name :</p>
            <p>{user.lastName}</p>
          </div>
          <div className="left-firstname">
            <p>First Name :</p>
            <p>{user.firstName}</p>
          </div>
          <div className="left-age">
            <p>Age :</p>
            <p>{user.birthday}</p>
          </div>
          <div className="left-email">
            <p>Email :</p>
            <p>{user.email}</p>
          </div>
          <div className="left-password">
            <p>Password :</p>
            <p>{user.password}</p>
          </div>
          <div className="left-create">
            <p>Created at :</p>
            <p>{creationDateFormated}</p>
          </div>
          {user.is_admin ? (
            <div className="left-admin">
              <p>Admin :</p>
              <p>Yes</p>
            </div>
          ) : null}
          <a className="left-del" onClick={() => alertDelete(user._id)}>
            Delete My Account
          </a>
        </div>
        <div className="settingsContainer-right">
          {profiles.map((profile: any) => (
            <>
              <div className="settingsSubContainer">
                <div className="settingsContainer-avatar">
                  <img
                    src={matchAvatar(profile.avatar)}
                    alt="avatar"
                    className="settingsContainer-avatar-img"
                  />
                </div>
                <div className="settingsContainer-btn">
                  <NavLink
                    className="settingsContainer-btn--edit btn"
                    to={`/edit/${profile._id}`}
                  >
                    <i className="fa-solid fa-user-pen"></i>
                  </NavLink>
                  <a
                    className="settingsContainer-btn--delete btn"
                    onClick={() => alertDeleteProfile(profile._id)}
                  >
                    <i className="fa-solid fa-trash"></i>
                  </a>
                </div>
                <div className="settingsContainer-infos">
                  <p>{profile.pseudo}</p>
                  <p>-</p>
                  <p>{profile.quote}</p>
                  <p>-</p>
                  <p>
                    Young Profile :<span> </span>{" "}
                    {profile.is_young ? (
                      <i className="fa-solid fa-check"></i>
                    ) : (
                      <i className="fa-solid fa-x"></i>
                    )}
                  </p>
                </div>
              </div>
            </>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default SettingsPage;
