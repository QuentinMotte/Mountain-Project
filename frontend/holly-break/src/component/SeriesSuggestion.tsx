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
  name: string;
  tagline: string;
  first_air_date: string;
  last_air_date: string;
  0: string;
  number_of_seasons: string;
  number_of_episodes: string;
  vote_average: string;
}

interface GenresProps {
  map(arg0: (item: any) => JSX.Element): import("react").ReactNode;
  id: number;
  name: string;
}

interface picturesProps {
  map(arg0: (item: any) => JSX.Element): import("react").ReactNode;
  file_path: string;
}

interface CastProps {
  map(arg0: (item: any) => JSX.Element): import("react").ReactNode;
  id: number;
  name: string;
  character: string;
  profile_path: string;
}

function SeriesSuggestion() {
  let id = useParams();
  const ID = id.id;
  const URLSIMMOVIES = `https://api.themoviedb.org/3/tv/${ID}/similar?api_key=${API_KEY}&language=en-US&include_adult=false`;

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
        <div className="poster_movies">
          {moviesSim?.map((movieSim) => (
            <NavLink
              className="poster"
              onClick={refreshPage}
              to={`/tv/${movieSim.id}`}
            >
              <div id={movieSim.id} className="movies_container_poster">
                <img src={GetPictures(movieSim.poster_path)} alt="poster" />
                <div className="poster_info_tr">
                  <h2>{movieSim.title}</h2>
                  <h2>{movieSim.name}</h2>
                  <p>{movieSim.vote_average}</p>
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
}

export default SeriesSuggestion;
