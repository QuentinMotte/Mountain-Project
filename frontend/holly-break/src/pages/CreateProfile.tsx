import React from "react";
import Footer from "../component/Footer";
import Header from "../component/Header";
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
import axios from "axios";
import { StatefulPinInput } from "react-input-pin-code";
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

const BASEURL = process.env.REACT_APP_API_URL;

function CreateProfile() {
  const idUser = localStorage.getItem("user");

  const [pin_code, setPinCode] = React.useState<ProfilePasscode>({
    pin_code: "",
  });

  const [pin_codeConfirm, setPinCodeConfirm] =
    React.useState<ProfilePasscodeConfirm>({
      pin_codeConfirm: "",
    });

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

  const [isPin, setIsPin] = React.useState<boolean>(false);

  const handleChangesPinCodeConfirm = (e: any) => {
    setPinCodeConfirm(e);
  };

  const handleChangesPseudo = (e: any) => {
    setPseudo({ pseudo: e.target.value });
  };

  const handleChangesQuote = (e: any) => {
    setQuote({ quote: e.target.value });
  };

  const handleChangesAvatar = (e: any) => {
    setAvatar({ avatar: e.target.value });
  };

  const handleChangesPinCode = (e: any) => {
    setPinCode(e);
  };

  const handleChangesIsYoung = (e: any) => {
    setIsYoung({ is_young: e.target.checked });
  };

  const handleChangesIsPin = (e: any) => {
    setIsPin(e.target.checked);
  };

  //____________________

  const newPinCode: string = pin_code.toString().replace(/,/g, "");

  const newPinCodeConfirm = pin_codeConfirm.toString().replace(/,/g, "");

  //____________________

  const profileState: ProfileState = {
    pseudo: pseudo.pseudo,
    quote: quote.quote,
    avatar: avatar.avatar,
    pin_code: newPinCode,
    is_young: is_young.is_young,
    id_user: idUser,
  };

  const profileStateNoPinCode: ProfileStateNoPin = {
    pseudo: pseudo.pseudo,
    quote: quote.quote,
    avatar: avatar.avatar,
    is_young: is_young.is_young,
    id_user: idUser,
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (isPin) {
      if (newPinCode === newPinCodeConfirm) {
        axios
          .post(`${BASEURL}api/profile/register`, profileState)
          .then((res) => {
            localStorage.setItem("NewProfile", res.data.profile);
            window.location.href = "/SuccessProfile";
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        alert("Les codes pin ne correspondent pas");
      }
    } else {
      axios
        .post(`${BASEURL}api/profile/register`, profileStateNoPinCode)
        .then((res) => {
          localStorage.setItem("NewProfile", res.data.profile);
          window.location.href = "/SuccessProfile";
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const props = {
    inputStyle: {
      margin: "1rem",
      height: "4rem",
      width: "4rem",
      color: "white",
      borderRadius: "5px",
      fontWeight: "bold",
    },
  };

  return (
    <>
      <Header></Header>
      <main className="content-container--CreateProfilePage">
        <h1>create your first profile !</h1>
        <form className="profile-form">
          <div className="profileForm-group profileForm-group-pseudo">
            <label htmlFor="pseudo">Profile Name *</label>
            <input
              type="text"
              name="pseudo"
              id="pseudo"
              onChange={handleChangesPseudo}
            />
          </div>

          <div className="profileForm-group profileForm-group-quote">
            <label htmlFor="quote">Quote *</label>
            <select name="quote" id="quote" onChange={handleChangesQuote}>
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

          <div className="profileForm-group profileForm-group-avatar">
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

          {!isPin ? (
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
          ) : (
            <>
              <div className="profileForm-group profileForm-group-pin">
                <label htmlFor="pin_code">Choose Your PIN Code</label>
                <StatefulPinInput
                  name="pin_code"
                  id="profilePIN"
                  size="lg"
                  length={4}
                  initialValue=""
                  onComplete={handleChangesPinCode}
                  required={true}
                  {...props}
                />
              </div>

              <div className="profileForm-group profileForm-group-pinconfirm">
                <label htmlFor="profilePINConfirm">Confirm Your PIN Code</label>
                <StatefulPinInput
                  name="profilePINConfirm"
                  id="profilePINConfirm"
                  size="lg"
                  length={4}
                  initialValue=""
                  onComplete={handleChangesPinCodeConfirm}
                  required={true}
                  {...props}
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
            </>
          )}

          <div className="profileForm-group profileForm-group-young">
            <label htmlFor="is_young">Child Account ? </label>
            <input
              type="checkbox"
              name="is_young"
              id="is_young"
              onChange={handleChangesIsYoung}
            />
          </div>

          <div className="profileForm-group profileForm-group-submit">
            <button type="submit" onClick={handleSubmit}>
              Create
            </button>
          </div>
        </form>
      </main>
      <Footer></Footer>
    </>
  );
}

export default CreateProfile;
