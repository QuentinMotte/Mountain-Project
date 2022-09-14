import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import Footer from "../component/Footer";
import Header from "../component/Header";
import { MoviesPosters } from "../component/MoviesPosters";

function Movies() {
  return (
    <>
      <Header></Header>
      <main className="content-container">
        <MoviesPosters />
      </main>
      <Footer></Footer>
    </>
  );
}

export default Movies;
