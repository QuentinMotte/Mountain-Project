import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../component/Footer";
import Header from "../component/Header";

function PlayerPage() {
  return (
    <>
      <Header></Header>
      <div>
        <h1>Player</h1>
        <p>This is the player page</p>
        <NavLink to="/">Landing</NavLink>
      </div>
      <Footer></Footer>
    </>
  );
}

export default PlayerPage;
