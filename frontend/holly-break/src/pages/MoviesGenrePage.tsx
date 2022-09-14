import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import Footer from "../component/Footer";
import Header from "../component/Header";
import MoviesGenre from "../component/MoviesGenre";

function MoviesGenrePage() {
  return (
    <>
      <Header></Header>
      <main className="content-container">
        <MoviesGenre />
      </main>
      <Footer></Footer>
    </>
  );
}

export default MoviesGenrePage;
