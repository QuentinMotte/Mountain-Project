import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../component/Footer";
import Header from "../component/Header";

function SelectProfile() {
  return (
    <>
      <Header></Header>
      <main className="content-container">
        <div>
          <h1>Select Profile</h1>
          <p>This is the select profile page</p>
          <NavLink to="/">Landing</NavLink>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}

export default SelectProfile;
