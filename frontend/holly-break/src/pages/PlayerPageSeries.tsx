import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../component/Footer";
import Header from "../component/Header";
import PlayerSerie from "../component/PlayerSerie";

function PlayerPageSeries() {
  return (
    <>
      <Header></Header>
      <main className="content-container">
        <PlayerSerie />
      </main>
      <Footer></Footer>
    </>
  );
}

export default PlayerPageSeries;
