import React from "react";
import { Navigate, NavLink } from "react-router-dom";
import { StatefulPinInput } from "react-input-pin-code";

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
import Header from "../component/Header";
import Footer from "../component/Footer";
import axios from "axios";

const BASEURL = process.env.REACT_APP_API_URL;

type Props = {
  isOpen: boolean;
  setIsOpen: any;
  id: string | null;
};

interface ProfilePasscode {
  pin_code: string;
}

interface ProfilePasscodeConfirm {
  pin_codeConfirm: string;
}

interface ProfilePseudo {
  pseudo: string;
}

interface ProfileQuote {
  quote: string;
}

interface ProfileAvatar {
  avatar: string;
}

interface ProfileYoung {
  is_young: boolean;
}

interface ProfileState {
  pseudo: string;
  quote: string;
  avatar: string;
  pin_code: string;
  is_young: boolean;
  id_user: string | null;
}

interface ProfileStateNoPin {
  pseudo: string;
  quote: string;
  avatar: string;
  is_young: boolean;
  id_user: string | null;
}

function SettingsProfile() {
  const Props = {
    inputStyle: {
      margin: "1rem",
      height: "4rem",
      width: "4rem",
      color: "white",
      borderRadius: "5px",
      fontWeight: "bold",
    },
  };
  const id = window.location.pathname.split("/")[2];
  const idUser = localStorage.getItem("user");

  const [profile, setProfile] = React.useState({
    id: "",
    pseudo: "",
    quote: "",
    avatar: "",
    is_young: false,
    pin_code: "",
  });

  React.useEffect(() => {
    axios.get(`${BASEURL}api/profile/${id}`).then((response) => {
      setProfile(response.data);
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
        return AvatarDefault;
    }
  }

  const [pin_code, setPinCode] = React.useState<ProfilePasscode>({
    pin_code: profile.pin_code,
  });

  const [pin_codeConfirm, setPinCodeConfirm] =
    React.useState<ProfilePasscodeConfirm>({
      pin_codeConfirm: profile.pin_code,
    });

  const [isPin, setIsPin] = React.useState<boolean>(false);

  const handleChangesPin = (e: any) => {
    setProfile({ ...profile, pin_code: e.target.value });
  };

  const handleChangesPinCodeConfirm = (e: any) => {
    setPinCodeConfirm(e);
  };

  const handleChangesPseudo = (e: any) => {
    setProfile({ ...profile, pseudo: e.target.value });
  };

  const handleChangesQuote = (e: any) => {
    setProfile({ ...profile, quote: e.target.value });
  };

  const handleChangesAvatar = (e: any) => {
    setProfile({ ...profile, avatar: e.target.value });
  };

  const handleChangesPinCode = (e: any) => {
    setPinCode(e);
  };

  const handleChangesIsYoung = (e: any) => {
    setProfile({ ...profile, is_young: e.target.checked });
  };

  const handleChangesIsPin = (e: any) => {
    setIsPin(e.target.checked);
  };

  //____________________

  const newPinCode: string = pin_code.toString().replace(/,/g, "");

  const newPinCodeConfirm = pin_codeConfirm.toString().replace(/,/g, "");

  //____________________

  const profileState: ProfileState = {
    pseudo: profile.pseudo,
    quote: profile.quote,
    avatar: profile.avatar,
    pin_code: newPinCode,
    is_young: profile.is_young,
    id_user: idUser,
  };

  const profileStateNoPinCode: ProfileStateNoPin = {
    pseudo: profile.pseudo,
    quote: profile.quote,
    avatar: profile.avatar,
    is_young: profile.is_young,
    id_user: idUser,
  };

  const handleBackToSettings = () => {
    window.history.back();
  };

  const handleUpdateProfile = (e: any) => {
    e.preventDefault();
    if (isPin) {
      if (newPinCode === newPinCodeConfirm) {
        axios
          .put(`http://localhost:5000/api/profile/${id}`, profileState)
          .then((response) => {
            window.location.href = `/SettingsUser`;
          });
      } else {
        alert("Les codes pin ne correspondent pas");
      }
    } else {
      axios
        .put(`http://localhost:5000/api/profile/${id}`, profileStateNoPinCode)
        .then((response) => {
          window.location.href = `/SettingsUser`;
        });
    }
  };

  return (
    <>
      <div className="settingsProfile-Container">
        <div className="settingsProfile-subContainer">
          <i
            className="fa-solid fa-square-xmark"
            onClick={handleBackToSettings}
          ></i>
          <form className="profile-form">
            <div className="profileFormLeft">
              <div className="profileForm-group profileForm-group-pseudo">
                <label htmlFor="pseudo">Profile Name *</label>
                <input
                  type="text"
                  name="pseudo"
                  id="pseudo"
                  placeholder={profile.pseudo}
                  onChange={handleChangesPseudo}
                />
              </div>

              <div className="profileForm-group profileForm-group-quote">
                <label htmlFor="quote">Quote *</label>
                <select name="quote" id="quote" onChange={handleChangesQuote}>
                  <option value={profile?.quote}>{profile.quote}</option>
                  <option value="">Choose a quote</option>
                  <option value="Gryffondor">Gryffondor</option>
                  <option value="Serpentard">Serpentard</option>
                  <option value="Serdaigle">Serdaigle</option>
                  <option value="Poussouffle">Poussouffle</option>
                  <option value="Seigneur des Tenebres">
                    Seigneur des Ténèbres
                  </option>
                </select>
              </div>
            </div>

            <div className="profileForm-group profileFormMid">
              <h2>Choose Your Avatar *</h2>

              <label>
                <input
                  type="radio"
                  name="avatar"
                  value="AvatarAsuka"
                  id="avatar1"
                  onChange={handleChangesAvatar}
                />
                <img src={AvatarAsuka} alt="avatar1" />
              </label>

              <label>
                <input
                  type="radio"
                  name="avatar"
                  value="AvatarAsuma"
                  id="avatar2"
                  onChange={handleChangesAvatar}
                />
                <img src={AvatarAsuma} alt="avatar2" />
              </label>

              <label>
                <input
                  type="radio"
                  name="avatar"
                  value="AvatarGon"
                  id="avatar3"
                  onChange={handleChangesAvatar}
                />
                <img src={AvatarGon} alt="avatar3" />
              </label>

              <label>
                <input
                  type="radio"
                  name="avatar"
                  value="AvatarKirua"
                  id="avatar4"
                  onChange={handleChangesAvatar}
                />
                <img src={AvatarKirua} alt="avatar4" />
              </label>

              <label>
                <input
                  type="radio"
                  name="avatar"
                  value="AvatarLuffy"
                  id="avatar5"
                  onChange={handleChangesAvatar}
                />
                <img src={AvatarLuffy} alt="avatar5" />
              </label>

              <label>
                <input
                  type="radio"
                  name="avatar"
                  value="AvatarMeliodas"
                  id="avatar6"
                  onChange={handleChangesAvatar}
                />
                <img src={AvatarMeliodas} alt="avatar6" />
              </label>

              <label>
                <input
                  type="radio"
                  name="avatar"
                  value="AvatarNami"
                  id="avatar7"
                  onChange={handleChangesAvatar}
                />
                <img src={AvatarNami} alt="avatar7" />
              </label>

              <label>
                <input
                  type="radio"
                  name="avatar"
                  value="AvatarRobin"
                  id="avatar8"
                  onChange={handleChangesAvatar}
                />
                <img src={AvatarRobin} alt="avatar8" />
              </label>

              <label>
                <input
                  type="radio"
                  name="avatar"
                  value="AvatarSakura"
                  id="avatar9"
                  onChange={handleChangesAvatar}
                />
                <img src={AvatarSakura} alt="avatar9" />
              </label>

              <label>
                <input
                  type="radio"
                  name="avatar"
                  value="AvatarShinra"
                  id="avatar10"
                  onChange={handleChangesAvatar}
                />
                <img src={AvatarShinra} alt="avatar10" />
              </label>
            </div>
            <div className="profileFormRight">
              {!isPin ? (
                <>
                  <div className="optionCodePin">
                    <label htmlFor="setupPin">
                      Do you want to setup a Code Pin ?
                    </label>
                    <input
                      type="checkbox"
                      name="setupPin"
                      id="setupPin"
                      onChange={handleChangesIsPin}
                    />
                  </div>
                  <div className="profileForm-group profileForm-group-young">
                    <label htmlFor="is_young">Child Account ? </label>
                    <input
                      type="checkbox"
                      name="is_young"
                      id="is_young"
                      onChange={handleChangesIsYoung}
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="profileForm-group profileForm-group-pin">
                    <label htmlFor="pin_code">Choose Your PIN Code</label>
                    <StatefulPinInput
                      name="pin_code"
                      id="profilePIN"
                      size="lg"
                      length={4}
                      initialValue={profile.pin_code ? profile.pin_code : ""}
                      onComplete={handleChangesPinCode}
                      required={true}
                      {...Props}
                    />
                  </div>

                  <div className="profileForm-group profileForm-group-pinconfirm">
                    <label htmlFor="profilePINConfirm">
                      Confirm Your PIN Code
                    </label>
                    <StatefulPinInput
                      name="profilePINConfirm"
                      id="profilePINConfirm"
                      size="lg"
                      length={4}
                      initialValue={profile.pin_code ? profile.pin_code : ""}
                      onComplete={handleChangesPinCodeConfirm}
                      required={true}
                      {...Props}
                    />
                  </div>

                  <div className="optionCodePin">
                    <label htmlFor="codePinNo">
                      Finally i don't want to use a pin code
                    </label>
                    <input
                      type="checkbox"
                      name="codePinNo"
                      id="codePinNo"
                      checked={isPin}
                      onChange={handleChangesIsPin}
                    />
                  </div>
                  <div className="profileForm-group profileForm-group-young">
                    <label htmlFor="is_young">Child Account ? </label>
                    <input
                      type="checkbox"
                      name="is_young"
                      id="is_young"
                      onChange={handleChangesIsYoung}
                    />
                  </div>
                </>
              )}
              <div className="profileForm-group profileForm-group-submit">
                <button type="submit" onClick={handleUpdateProfile}>
                  Update
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SettingsProfile;
