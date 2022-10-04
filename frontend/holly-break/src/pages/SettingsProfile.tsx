import React from "react";
import { NavLink } from "react-router-dom";
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

interface ProfileAvatar {
  avatar: string;
}

interface ProfilePseudo {
  pseudo: string;
}

interface ProfileQuote {
  quote: string;
}

interface ProfileYoung {
  is_young: boolean;
}

interface Profile {
  id: string;
  pseudo: string;
  quote?: string;
  avatar?: string;
  is_young?: boolean;
  pin_code?: string;
}

function SettingsProfile() {
  const id = window.location.pathname.split("/")[2];

  const [profile, setProfile] = React.useState<Profile>({
    id: "",
    pseudo: "",
    quote: "",
    avatar: "",
    is_young: false,
    pin_code: "",
  });

  React.useEffect(() => {
    axios.get(`http://localhost:5000/api/profile/${id}`).then((response) => {
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

  const [pseudo, setPseudo] = React.useState<ProfilePseudo>({
    pseudo: "",
  });

  const [quote, setQuote] = React.useState<ProfileQuote>({
    quote: "",
  });

  const [avatar, setAvatar] = React.useState<ProfileAvatar>({
    avatar: "",
  });

  const [is_young, setIsYoung] = React.useState<ProfileYoung>({
    is_young: false,
  });

  const handleChangesPseudo = (e: any) => {
    setPseudo({ pseudo: e.target.value });
  };

  const handleChangesQuote = (e: any) => {
    setQuote({ quote: e.target.value });
  };

  const handleChangesAvatar = (e: any) => {
    setAvatar({ avatar: e.target.value });
  };

  const handleChangesIsYoung = (e: any) => {
    setIsYoung({ is_young: e.target.checked });
  };

  //_______________
  // PIN CODE
  //_______________

  const [isPin, setIsPin] = React.useState<boolean>(false);

  const [pin_code, setPinCode] = React.useState<ProfilePasscode>({
    pin_code: "",
  });

  const [pin_codeConfirm, setPinCodeConfirm] =
    React.useState<ProfilePasscodeConfirm>({
      pin_codeConfirm: "",
    });

  const newPinCode: string = pin_code.toString().replace(/,/g, "");

  const newPinCodeConfirm = pin_codeConfirm.toString().replace(/,/g, "");

  const handleChangesIsPin = (e: any) => {
    setIsPin(e.target.checked);
  };

  const handleChangesPinCode = (e: any) => {
    setPinCode(e);
  };

  const handleChangesPinCodeConfirm = (e: any) => {
    setPinCodeConfirm(e);
  };

  const handleBackToSettings = () => {
    window.history.back();
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
                  value={profile.pseudo}
                  onChange={handleChangesPseudo}
                />
              </div>

              <div className="profileForm-group profileForm-group-quote">
                <label htmlFor="quote">Quote *</label>
                <select
                  name="quote"
                  id="quote"
                  onChange={handleChangesQuote}
                  value={profile.quote}
                >
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
                  checked={profile.avatar === "AvatarAsuka"}
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
                  checked={profile.avatar === "AvatarAsuma"}
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
                  checked={profile.avatar === "AvatarGon"}
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
                  checked={profile.avatar === "AvatarKirua"}
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
                  checked={profile.avatar === "AvatarLuffy"}
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
                  checked={profile.avatar === "AvatarMeliodas"}
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
                  checked={profile.avatar === "AvatarNami"}
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
                  checked={profile.avatar === "AvatarRobin"}
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
                  checked={profile.avatar === "AvatarSakura"}
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
                  checked={profile.avatar === "AvatarShinra"}
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
                      checked={profile.is_young}
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
                      initialValue=""
                      onComplete={handleChangesPinCodeConfirm}
                      required={true}
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
                      checked={profile.is_young}
                      onChange={handleChangesIsYoung}
                    />
                  </div>
                </>
              )}
              <div className="profileForm-group profileForm-group-submit">
                <button type="submit">Update</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SettingsProfile;
