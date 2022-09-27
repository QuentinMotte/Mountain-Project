import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../component/Footer";
import Header from "../component/Header";

interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  birthday: number;
  id_profiles: Array<string>;
  is_admin: boolean;
}

function SettingsUser() {
  const id_user = localStorage.getItem("user");
  React.useEffect(() => {
    fetch(`http://localhost:5000/api/user/${id_user}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
  }, []);
  return (
    <>
      <Header></Header>
      <main className="content-container">
        <div></div>
      </main>
      <Footer></Footer>
    </>
  );
}

export default SettingsUser;
