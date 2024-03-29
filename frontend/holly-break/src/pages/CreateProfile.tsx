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
  pin_code: number;
  is_young: boolean;
  id_user: string;
}

function CreateProfile() {
  // Initials states

  const [profile, setProfile] = React.useState<ProfilePseudo>({
    pseudo: "",
  });

  const [profileQuote, setProfileQuote] = React.useState<ProfileQuote>({
    quote: "",
  });

  const [profileAvatar, setProfileAvatar] = React.useState<ProfileAvatar>({
    avatar: "",
  });

  const [profilePasscode, setProfilePasscode] = React.useState<ProfilePasscode>(
    {
      pin_code: "",
    }
  );

  const [profilePasscodeConfirm, setProfilePasscodeConfirm] =
    React.useState<ProfilePasscodeConfirm>({
      pin_codeConfirm: "",
    });

  const [profileYoung, setProfileYoung] = React.useState<ProfileYoung>({
    is_young: false,
  });

  // Functions

  const onlyNumber = (e: any) => {
    const re = /^[0-9\b]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      return e.target.value;
    }
  };

  const passcodeOK = () => {
    if (pin_code === pin_codeConfirm) {
      return true;
    } else {
      return false;
    }
  };

  // handle change

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleChangeQuote = (e: any) => {
    const { name, value } = e.target;
    setProfileQuote({ ...profileQuote, [name]: value });
  };

  const handleChangeAvatar = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfileAvatar({ ...profileAvatar, [name]: value });
  };

  const handlePasscodeChange = (e: any) => {
    setProfilePasscode({ pin_code: onlyNumber(e) });
  };

  const pin_code = parseInt(profilePasscode.pin_code);

  const handlePasscodeConfirmChange = (e: any) => {
    setProfilePasscodeConfirm({ pin_codeConfirm: onlyNumber(e) });
  };

  const pin_codeConfirm = parseInt(profilePasscodeConfirm.pin_codeConfirm);

  const handleYoungChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfileYoung({ ...profileYoung, [name]: value });
  };

  // import the user id from local storage and remove the quotes

  const id: any = localStorage.getItem("user");

  // Collect the data

  const ProfilState: ProfileState = {
    pseudo: profile.pseudo,
    quote: profileQuote.quote,
    avatar: profileAvatar.avatar,
    pin_code: pin_code,
    is_young: profileYoung.is_young,
    id_user: id,
  };

  // handle submit and send data

  async function handleSubmit(e: any) {
    e.preventDefault();
    if (passcodeOK()) {
      await axios
        .post("http://localhost:5000/api/profile/register", ProfilState)
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
  }

  return (
    <>
      <Header></Header>
      <main className="content-container--CreateProfilePage">
        <h1>create your first profile !</h1>
        <form className="profile-form">
          <div className="profileForm-group profileForm-group-pseudo">
            <label htmlFor="pseudo">Profile Name</label>
            <input
              type="text"
              name="pseudo"
              id="pseudo"
              required
              onChange={handleChange}
              value={profile.pseudo}
            />
          </div>

          <div className="profileForm-group profileForm-group-quote">
            <label htmlFor="quote">Quote</label>
            <select
              name="quote"
              id="quote"
              required
              onChange={handleChangeQuote}
              value={profileQuote.quote}
            >
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
            <h2>Choose Your Avatar</h2>

            <label>
              <input
                type="radio"
                name="avatar"
                value="AvatarAsuka"
                id="avatar1"
                onChange={handleChangeAvatar}
              />
              <img src={AvatarAsuka} alt="avatar1" />
            </label>

            <label>
              <input
                type="radio"
                name="avatar"
                value="AvatarAsuma"
                id="avatar2"
                onChange={handleChangeAvatar}
              />
              <img src={AvatarAsuma} alt="avatar2" />
            </label>

            <label>
              <input
                type="radio"
                name="avatar"
                value="AvatarGon"
                id="avatar3"
                onChange={handleChangeAvatar}
              />
              <img src={AvatarGon} alt="avatar3" />
            </label>

            <label>
              <input
                type="radio"
                name="avatar"
                value="AvatarKirua"
                id="avatar4"
                onChange={handleChangeAvatar}
              />
              <img src={AvatarKirua} alt="avatar4" />
            </label>

            <label>
              <input
                type="radio"
                name="avatar"
                value="AvatarLuffy"
                id="avatar5"
                onChange={handleChangeAvatar}
              />
              <img src={AvatarLuffy} alt="avatar5" />
            </label>

            <label>
              <input
                type="radio"
                name="avatar"
                value="AvatarMeliodas"
                id="avatar6"
                onChange={handleChangeAvatar}
              />
              <img src={AvatarMeliodas} alt="avatar6" />
            </label>

            <label>
              <input
                type="radio"
                name="avatar"
                value="AvatarNami"
                id="avatar7"
                onChange={handleChangeAvatar}
              />
              <img src={AvatarNami} alt="avatar7" />
            </label>

            <label>
              <input
                type="radio"
                name="avatar"
                value="AvatarRobin"
                id="avatar8"
                onChange={handleChangeAvatar}
              />
              <img src={AvatarRobin} alt="avatar8" />
            </label>

            <label>
              <input
                type="radio"
                name="avatar"
                value="AvatarSakura"
                id="avatar9"
                onChange={handleChangeAvatar}
              />
              <img src={AvatarSakura} alt="avatar9" />
            </label>

            <label>
              <input
                type="radio"
                name="avatar"
                value="AvatarShinra"
                id="avatar10"
                onChange={handleChangeAvatar}
              />
              <img src={AvatarShinra} alt="avatar10" />
            </label>
          </div>

          <div className="profileForm-group profileForm-group-pin">
            <label htmlFor="pin_code">Choose Your PIN Code</label>
            <input
              type="password"
              name="pin_code"
              id="profilePIN"
              maxLength={4}
              minLength={4}
              value={profilePasscode.pin_code}
              onChange={handlePasscodeChange}
              autoComplete="off"
              required
            />
          </div>

          <div className="profileForm-group profileForm-group-pinconfirm">
            <label htmlFor="profilePINConfirm">Confirm Your PIN Code</label>
            <input
              type="password"
              name="profilePINConfirm"
              id="profilePINConfirm"
              maxLength={4}
              minLength={4}
              value={profilePasscodeConfirm.pin_codeConfirm}
              onChange={handlePasscodeConfirmChange}
              autoComplete="off"
              required
            />
          </div>

          <div className="profileForm-group profileForm-group-young">
            <label htmlFor="is_young">Child Account ? </label>
            <input
              type="checkbox"
              name="is_young"
              id="is_young"
              onChange={handleYoungChange}
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
