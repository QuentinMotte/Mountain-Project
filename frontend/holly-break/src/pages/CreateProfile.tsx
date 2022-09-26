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
  pin_code: Array<number>;
}

interface ProfilePasscodeConfirm {
  pin_codeConfirm: Array<number>;
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
  pin_code: Array<number>;
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
      pin_code: [],
    }
  );

  const [profilePasscodeConfirm, setProfilePasscodeConfirm] =
    React.useState<ProfilePasscodeConfirm>({
      pin_codeConfirm: [],
    });

  const [profileYoung, setProfileYoung] = React.useState<ProfileYoung>({
    is_young: false,
  });

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

  const handleYoungChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfileYoung({ ...profileYoung, [name]: value });
  };

  const handlePasscodeChange = (e: any) => {
    setProfilePasscode({ ...profilePasscode });
  };

  const id: any = localStorage.getItem("user");

  const ProfilState: ProfileState = {
    pseudo: profile.pseudo,
    quote: profileQuote.quote,
    avatar: profileAvatar.avatar,
    pin_code: profilePasscode.pin_code,
    is_young: profileYoung.is_young,
    id_user: id,
  };

  async function handlesubmit(e: any) {
    e.preventDefault();
    await axios
      .post("http://localhost:5000/api/profile/register", ProfilState)
      .then((res) => {
        console.log(res);
        // localStorage.setItem("NewProfile", res.data.profile);
        // window.location.href = "/SuccessProfile";
      });
  }

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
              onChange={handleChange}
              value={profile.pseudo}
            />
          </div>

          <div className="profileForm-group profileForm-group-quote">
            <label htmlFor="quote">Quote *</label>
            <select
              name="quote"
              id="quote"
              onChange={handleChangeQuote}
              value={profileQuote.quote}
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

          <div className="profileForm-group profileForm-group-avatar">
            <h2>Choose Your Avatar *</h2>

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
            <StatefulPinInput
              name="pin_code"
              id="profilePIN"
              length={4}
              // value={profilePasscode.pin_code}
              onChange={handlePasscodeChange}
              onComplete={(value) => setProfilePasscode}
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
            <button type="submit" onClick={handlesubmit}>
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
