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
      console.log(response.data);
    });
  }, []);

  function ifItsTrue(is_admin: boolean) {
    if (is_admin === true) {
      return "Yes";
    } else {
      return "No";
    }
  }

  function displayUserInfo() {
    return (
      <>
        <div>
          <div className="userContainer-left">
            <p>First name : {user.firstName}</p>
            <p>Last name : {user.lastName}</p>
            <p>Email : {user.email}</p>
            <p>Age : {user.birthday}</p>
            <p>Is admin: {ifItsTrue(user.is_admin)}</p>
          </div>
          <div className="userContainer-right">
            <p>Profiles : {user.id_profiles}</p>
          </div>
        </div>

        <NavLink to="/admin">Back</NavLink>
      </>
    );
  }

  return (
    <>
      <Header></Header>
      <h1>User overview</h1>
      <main className="content-container content-container-useradmin">
        <div>{displayUserInfo()}</div>
      </main>
      <Footer></Footer>
    </>
  );
}

export default UserPageAdmin;
