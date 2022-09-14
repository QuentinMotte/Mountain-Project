import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../component/Footer";
import Header from "../component/Header";
import axios from "axios";

function UserPageAdmin() {
  const id = window.location.pathname.split("/")[2];

  const [user, setUser] = React.useState({
    _id: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    birthday: 0,
    id_profiles: "",
    is_admin: false,
  });

  React.useEffect(() => {
    axios.get(`http://localhost:5000/api/user/${id}`).then((response) => {
      setUser(response.data);
    });
  }, []);

  function ifItsTrue(is_admin: boolean) {
    if (is_admin === true) {
      return "Yes";
    } else {
      return "No";
    }
  }

  return (
    <>
      <Header></Header>
      <main className="content-container content-container-useradmin">
        <div className="container-left">
          <h1>User overview</h1>
          <div className="user-overview">
            user overview name firstname toussa toussa
          </div>
        </div>
        <div className="container-right">
          <h1>Profiles</h1>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}

export default UserPageAdmin;
