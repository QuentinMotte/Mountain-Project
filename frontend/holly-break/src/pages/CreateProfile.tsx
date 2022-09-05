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
import { useState } from "react";

interface ProfilePasscode {
  pin_code: string;
}

interface ProfilePasscodeConfirm {
  pin_codeConfirm: string;
}

interface Profile {
  pseudo: string;
  quote: string;
  avatar: string;
  is_young: boolean;
}

function CreateProfile() {
  const [profilePasscode, setProfilePasscode] = useState<ProfilePasscode>({
    pin_code: "",
  });

  const onlyNumber = (e: any) => {
    const re = /^[0-9\b]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      return e.target.value;
    }
  };

  const handlePasscodeChange = (e: any) => {
    setProfilePasscode({ pin_code: onlyNumber(e) });
  };

  const pin_code = parseInt(profilePasscode.pin_code);

  const [profilePasscodeConfirm, setProfilePasscodeConfirm] =
    useState<ProfilePasscodeConfirm>({
      pin_codeConfirm: "",
    });

  const handlePasscodeConfirmChange = (e: any) => {
    setProfilePasscodeConfirm({ pin_codeConfirm: onlyNumber(e) });
  };

  const pin_codeConfirm = parseInt(profilePasscodeConfirm.pin_codeConfirm);

  const passcodeOK = () => {
    if (pin_code === pin_codeConfirm) {
      return true;
    } else {
      return false;
    }
  };

  const [profile, setProfile] = useState<Profile>({
    pseudo: "",
    quote: "",
    avatar: "",
    is_young: false,
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  return (
    <>
      <Header></Header>
      <main className="content-container">
        <h1>create you first profile !</h1>
        <form action="" className="profile-form">
          <div className="profileForm-group">
            <label htmlFor="profileName">Profile Name</label>
            <input
              type="text"
              name="profileName"
              id="profileName"
              required
              value={profile.pseudo}
              onChange={handleChange}
            />
          </div>

          <div className="profileForm-group">
            <label htmlFor="profileQuote">Quote</label>
            <select
              name="profileQuote"
              id="profileQuote"
              required
              value={profile.quote}
              onChange={handleChange}
            >
              <option value="1">Gryffondor</option>
              <option value="2">Serpentard</option>
              <option value="3">Serdaigle</option>
              <option value="4">Poussouffle</option>
              <option value="5">Seigneur des Ténèbres</option>
            </select>
          </div>

          <div className="profileForm-group">
            <label htmlFor="profileAvatar">Choose Your Avatar</label>

            <label>
              <input
                type="radio"
                name="avatar"
                value="img/avatar_profil/avatar_asuka.jpg"
                id="avatar1"
                onChange={handleChange}
              />
              <img src={AvatarAsuka} alt="avatar1" />
            </label>

            <label>
              <input
                type="radio"
                name="avatar"
                value="img/avatar_profil/avatar_asuma.jpeg"
                id="avatar2"
                onChange={handleChange}
              />
              <img src={AvatarAsuma} alt="avatar2" />
            </label>

            <label>
              <input
                type="radio"
                name="avatar"
                value="img/avatar_profil/avatar_gon.jpg"
                id="avatar3"
                onChange={handleChange}
              />
              <img src={AvatarGon} alt="avatar3" />
            </label>

            <label>
              <input
                type="radio"
                name="avatar"
                value="img/avatar_profil/avatar_kirua.jpg"
                id="avatar4"
                onChange={handleChange}
              />
              <img src={AvatarKirua} alt="avatar4" />
            </label>

            <label>
              <input
                type="radio"
                name="avatar"
                value="img/avatar_profil/avatar_luffysrx.jpg"
                id="avatar5"
                onChange={handleChange}
              />
              <img src={AvatarLuffy} alt="avatar5" />
            </label>

            <label>
              <input
                type="radio"
                name="avatar"
                value="img/avatar_profil/avatar_meliodas.jpg"
                id="avatar6"
                onChange={handleChange}
              />
              <img src={AvatarMeliodas} alt="avatar6" />
            </label>

            <label>
              <input
                type="radio"
                name="avatar"
                value="img/avatar_profil/avatar_nami.png"
                id="avatar7"
                onChange={handleChange}
              />
              <img src={AvatarNami} alt="avatar7" />
            </label>

            <label>
              <input
                type="radio"
                name="avatar"
                value="img/avatar_profil/avatar_robin.png"
                id="avatar8"
                onChange={handleChange}
              />
              <img src={AvatarRobin} alt="avatar8" />
            </label>

            <label>
              <input
                type="radio"
                name="avatar"
                value="img/avatar_profil/avatar_sakura.jpg"
                id="avatar9"
                onChange={handleChange}
              />
              <img src={AvatarSakura} alt="avatar9" />
            </label>

            <label>
              <input
                type="radio"
                name="avatar"
                value="img/avatar_profil/avatar_shinra.webp"
                id="avatar10"
                onChange={handleChange}
              />
              <img src={AvatarShinra} alt="avatar10" />
            </label>
          </div>

          <div className="profileForm-group">
            <label htmlFor="profilePIN">Choose Your PIN Code</label>
            <input
              type="password"
              name="profilePIN"
              id="profilePIN"
              maxLength={4}
              minLength={4}
              value={profilePasscode.pin_code}
              onChange={handlePasscodeChange}
              autoComplete="off"
              pattern="[0-9]"
              required
            />
          </div>

          <div className="profileForm-group">
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
              pattern="[0-9]"
              required
            />
          </div>

          <div className="profileForm-group">
            <label htmlFor="is_young">Child Account ? </label>
            <input
              type="checkbox"
              name="is_young"
              id="is_young"
              onChange={handleChange}
            />
          </div>

          <div className="profileForm-group">
            <button type="submit">Create</button>
          </div>
        </form>
      </main>
      <Footer></Footer>
    </>
  );
}

export default CreateProfile;
