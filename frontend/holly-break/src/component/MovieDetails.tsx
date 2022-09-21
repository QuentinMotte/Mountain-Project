import React from "react";
import { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";
import MoviesInfo from "./MoviesInfo";
import MoviesSuggestion from "./MoviesSuggestion";

const API: any = process.env.REACT_APP_API_KEY;

const API_KEY = API.replace(";", "");

interface moviesProps {
  map(arg0: (item: any) => JSX.Element): import("react").ReactNode;
  backdrop_path: string;
  poster_path: string;
  id: string;
  overview: string;
  runtime: string;
  title: string;
  tagline: string;
  release_date: string;
  vote_average: string;
}

interface picturesProps {
  map(arg0: (item: any) => JSX.Element): import("react").ReactNode;
  file_path: string;
}

function MovieDetails() {
  let id = useParams();
  const ID = id.id;
  const URL = `https://api.themoviedb.org/3/movie/${ID}?api_key=${API_KEY}&language=en-US`;
  const URLIMG = `https://api.themoviedb.org/3/movie/${ID}/images?api_key=${API_KEY}`;

  console.log(URL);

  let [movies, setMovies] = useState<moviesProps | undefined>();
  let [pictures, setPictures] = useState<picturesProps | undefined>();

  useEffect(() => {
    getMovie();
    getPicture();
  }, []);

  const getMovie = async () => {
    const { data } = await axios.get(URL);
    setMovies(data);
  };

  const getPicture = async () => {
    const { data } = await axios.get(URLIMG);
    setPictures(data.backdrops[0]);
  };

  //___________________________

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index: any) => {
    setToggleState(index);
  };

  //___________________________

  return (
    <>
      <div className="banner">
        <img
          src={`https://image.tmdb.org/t/p/original` + pictures?.file_path}
          alt="poster"
        />
        <div className="options">
          <NavLink className="poster" to={`/Player/movie/${movies?.id}`}>
            <i className="fa-solid fa-play"></i>
          </NavLink>
          <i className="fa-solid fa-plus"></i>
          <i className="fa-solid fa-heart"></i>
        </div>
      </div>

      <div className="button_info">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Details
        </button>

        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Suggestions
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <MoviesInfo />
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <MoviesSuggestion />
        </div>
      </div>
    </>
  );
}

export default MovieDetails;
