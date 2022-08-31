import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../component/Footer";
import Header from "../component/Header";

function MoviePage() {
  return (
    <>
      <Header></Header>
      <div>
        <h1>Movie</h1>
        <p>This is the movie page</p>
        <NavLink to="/">Landing</NavLink>
      </div>
      <Footer></Footer>
    </>
  );
}

export default MoviePage;
