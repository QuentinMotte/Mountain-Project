import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../component/Footer";
import Header from "../component/Header";
import MovieDetails from "../component/MovieDetails";

function MoviePage() {
  return (
    <>
      <Header></Header>
      <main className="content-container">
        <MovieDetails />
      </main>
      <Footer></Footer>
    </>
  );
}

export default MoviePage;
