import React from "react";
import { NavLink } from "react-router-dom";
import Fave from "../component/Fave";
import Footer from "../component/Footer";
import Header from "../component/Header";

function FavPage() {
  return (
    <>
      <Header></Header>
      <main className="content-container">
        <Fave />
      </main>
      <Footer></Footer>
    </>
  );
}

export default FavPage;
