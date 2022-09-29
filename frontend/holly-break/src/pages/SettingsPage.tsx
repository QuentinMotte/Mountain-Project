import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../component/Footer";
import Header from "../component/Header";
import axios from "axios";
import useRef from "react";

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

function SettingsPage() {
  const id = localStorage.getItem("user");

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

  const creationDate = new Date(user.createdAt);
  const creationDateFormated = creationDate.toLocaleDateString("en-EN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <Header />
      <h1>SettingsUser</h1>
      <main className="content-container content-container-settings">
        <div className="settingsContainer-left">
          <div>
            <p>Name :</p>
            <p>{user.lastName}</p>
          </div>
          <div>
            <p>First Name :</p>
            <p>{user.firstName}</p>
          </div>
          <div>
            <p>Age :</p>
            <p>{user.birthday}</p>
          </div>
          <div>
            <p>Email :</p>
            <p>{user.email}</p>
          </div>
          <div>
            <p>Password :</p>
            <p>{user.password}</p>
          </div>
          <div>
            <p>Created at :</p>
            <p>{creationDateFormated}</p>
          </div>
        </div>
        <div className="settingsContainer-right"></div>
      </main>
      <Footer />
    </>
  );
}

export default SettingsPage;
