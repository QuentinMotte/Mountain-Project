import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

function SettingsProfile() {
  return (
    <div>
      <Header />
      <h1>SettingsProfile</h1>
      <NavLink to={"/Home"}>Home</NavLink>
      <Footer />
    </div>
  );
}

export default SettingsProfile;
