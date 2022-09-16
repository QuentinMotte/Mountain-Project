import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Popular from "../component/Popular";

function PopularMovies() {
  return (
    <>
      <Header></Header>
      <main className="content-container">
        <Popular />
      </main>
      <Footer></Footer>
    </>
  );
}

export default PopularMovies;
