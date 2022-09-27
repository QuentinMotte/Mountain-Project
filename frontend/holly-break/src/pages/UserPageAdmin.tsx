import React from "react";
import Footer from "../component/Footer";
import Header from "../component/Header";
import axios from "axios";
import { NavLink } from "react-router-dom";

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
import FavoriteAdmin from "../component/FavoriteAdmin";
import HistoricalAdmin from "../component/HistoricalAdmin";
import WatchlistAdmin from "../component/WatchlistAdmin";

interface userProfiles {
  avatar: string;
  createdAt: string;
  favorites_movie: Array<string>;
  favorites_serie: Array<string>;
  historic_movie: Array<string>;
  historic_serie: Array<string>;
  id_user: string;
  is_young: boolean;
  pin_code: string;
  pseudo: string;
  quote: string;
  updatedAt: string;
  watchList_movie: Array<string>;
  watchList_serie: Array<string>;
  _id: string;
}

function UserPageAdmin() {
  const id = window.location.pathname.split("/")[2];

  const [user, setUser] = React.useState({
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

  const [profiles, setProfiles] = React.useState<userProfiles[]>([]);
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

  function deleteUser(id: string) {
    axios.delete(`http://localhost:5000/api/user/${id}`).then((response) => {
      alert(response.data.message);
      window.location.href = "/admin";
    });
  }

  function alertDelete(id: string) {
    if (window.confirm("Are you sure you want to delete this user?")) {
      deleteUser(id);
    }
  }

  function ifItsTrue(is_admin: boolean) {
    if (is_admin === true) {
      return "Yes";
    } else {
      return "No";
    }
  }

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

  // ------------------- Open and close modal -------------------

  const [isOpen, setIsOpen] = React.useState(false);
  const [isOpenHistorical, setIsOpenHistorical] = React.useState(false);
  const [isOpenWatchlist, setIsOpenWatchlist] = React.useState(false);

  return (
    <>
      <Header></Header>
      <main className="content-container content-container-useradmin">
        <div className="container-left">
          <h1>User overview</h1>
          <div className="user-overview">
            <div>
              <strong>First Name : </strong>
              <p className="user-firstname">{user.firstName}</p>
            </div>
            <div>
              <strong>Last Name : </strong>
              <p className="user-lastname">{user.lastName}</p>
            </div>
            <div>
              <strong>Email : </strong>
              <p className="user-email">{user.email}</p>
            </div>
            <div>
              <strong>Age : </strong>
              <p className="user-age">{user.birthday}</p>
            </div>
            <div>
              <strong>Admin : </strong>
              <p className="user-admin">{ifItsTrue(user.is_admin)}</p>
            </div>
            <div className="user-btnContainer">
              <NavLink className="user-back" to={`/Admin`}>
                back
              </NavLink>
              <button
                className="user-delete"
                onClick={() => alertDelete(user._id)}
              >
                delete
              </button>
            </div>
          </div>
        </div>
        <div className="container-right">
          <h1>Profiles</h1>
          <div className="profiles-overview">
            {profiles.map((profile: any) => (
              <>
                <div className="profile-card" key={profile._id}>
                  <div>
                    <img
                      className="profile-avatar"
                      src={matchAvatar(profile.avatar)}
                      alt=""
                    />
                  </div>
                  <div>
                    <strong>Pseudo : </strong>
                    <p className="profile-pseudo">{profile.pseudo}</p>
                  </div>
                  <div>
                    <strong>Quote : </strong>
                    <p className="profile-quote">{profile.quote}</p>
                  </div>
                  <div>
                    <strong>Pin Code : </strong>
                    <p className="profile-pincode">{profile.pin_code}</p>
                  </div>
                  <div>
                    <strong>Young Profile : </strong>
                    <p className="profile-young">
                      {ifItsTrue(profile.is_young)}
                    </p>
                  </div>
                  <div className="profile-btnContainer">
                    <a onClick={() => setIsOpen(true)}>
                      favorites <i className="fa-solid fa-arrow-right"></i>
                    </a>
                    {isOpen && (
                      <FavoriteAdmin
                        isOpen={isOpen}
                        setIsOpen={setIsOpen}
                        profile={profile}
                      />
                    )}
                    <a onClick={() => setIsOpenWatchlist(true)}>
                      watchlist <i className="fa-solid fa-arrow-right"></i>
                    </a>
                    {isOpenWatchlist && (
                      <WatchlistAdmin
                        isOpen={isOpenWatchlist}
                        setIsOpen={setIsOpenWatchlist}
                        profile={profile}
                      />
                    )}
                    <a onClick={() => setIsOpenHistorical(true)}>
                      historical <i className="fa-solid fa-arrow-right"></i>
                    </a>
                    {isOpenHistorical && (
                      <HistoricalAdmin
                        isOpen={isOpenHistorical}
                        setIsOpen={setIsOpenHistorical}
                        profile={profile}
                      />
                    )}
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}

export default UserPageAdmin;
