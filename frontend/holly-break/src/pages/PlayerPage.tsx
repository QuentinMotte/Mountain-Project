import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Player from "../component/Player";

function PlayerPage() {
  return (
    <>
      <Header></Header>
      <main className="content-container">
        <Player />
      </main>
      <Footer></Footer>
    </>
  );
}

export default PlayerPage;
