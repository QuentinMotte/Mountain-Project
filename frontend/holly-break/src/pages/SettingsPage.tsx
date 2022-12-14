import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../component/Footer";
import Header from "../component/Header";

function SettingsPage() {
  return (
    <>
      <Header></Header>
      <main className="content-container">
        <div>
          <h1>Settings</h1>
          <p>This is the settings page</p>
          <NavLink to="/">Landing</NavLink>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}

export default SettingsPage;
