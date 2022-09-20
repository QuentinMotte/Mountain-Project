import React from "react";
import Poster from "../img/poster_default.png";
import { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";

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

function MoviesSuggestion() {
  let id = useParams();
  const ID = id.id;
  const URLSIMMOVIES = `https://api.themoviedb.org/3/movie/${ID}/similar?api_key=${API_KEY}&language=en-US&page=1`;

  console.log(URL);

  let [moviesSim, setMoviesSim] = useState<moviesProps | undefined>();

  useEffect(() => {
    getMovieSim();
  }, []);

  const getMovieSim = async () => {
    const { data } = await axios.get(URLSIMMOVIES);
    setMoviesSim(data.results);
  };

  function refreshPage() {
    setTimeout(() => {
      window.location.reload();
    }, 1);
  }

  function GetPictures(avatar: string) {
    switch (avatar) {
      case null:
        return Poster;
      case avatar:
        return `https://image.tmdb.org/t/p/w500` + avatar;
    }
  }

  return (
    <>
      <div className="suggestions">
        <h2>Suggestions</h2>
        <div className="poster_movies">
          {moviesSim?.map((movieSim) => (
            <>
              <NavLink
                className="poster"
                onClick={refreshPage}
                to={`/movie/${movieSim.id}`}
              >
                <div id={movieSim.id} className="movies_container_poster">
                  <img src={GetPictures(movieSim.poster_path)} alt="poster" />
                </div>
                <div className="container_title"></div>
              </NavLink>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default MoviesSuggestion;
