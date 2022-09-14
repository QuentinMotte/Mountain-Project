import React from "react";
import { NavLink } from "react-router-dom";
import Actors from "../component/Actors";
import Footer from "../component/Footer";
import Header from "../component/Header";

function ActorPage() {
  return (
    <>
      <Header></Header>
      <main className="content-container">
        <Actors />
      </main>
      <Footer></Footer>
    </>
  );
}

export default ActorPage;
