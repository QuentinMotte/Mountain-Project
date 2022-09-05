import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Footer from "../component/Footer";
import Header from "../component/Header";
import MoviesPosters from "../component/MoviesPosters";

function Homepage() {
  const URL =
    "https://api.themoviedb.org/3/discover/movie?api_key=a378b12e0a9383634a503a8f29d43915&language=en-US&sort_by=popularity.desc";
  const getmovies = async () => {
    const res = await axios.get(URL);
    res.data.results.map((movie: any) => {
      console.log(movie.title);
    });
  };

  getmovies();

  return (
    <>
      <Header></Header>
      <main className="content-container">
        <div>
          <h1>Homepage</h1>
          <p>This is the homepage page</p>
          <NavLink to="/">Landing</NavLink>
        </div>

        <div>
          <MoviesPosters />
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}

export default Homepage;
