import React from "react";
import { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";
import SeriesInfo from "./SeriesInfo";
import SeriesSuggestion from "./SeriesSuggestion";

const API_KEY = "a378b12e0a9383634a503a8f29d43915";

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

function SeriesDetails() {
  let id = useParams();
  const ID = id.id;
  const URL = `https://api.themoviedb.org/3/tv/${ID}?api_key=${API_KEY}&language=en-US`;
  const URLIMG = `https://api.themoviedb.org/3/tv/${ID}/images?api_key=${API_KEY}`;
  const URLCAST = `https://api.themoviedb.org/3/tv/${ID}/credits?api_key=${API_KEY}&language=en-US`;
  const URLSIMMOVIES = `https://api.themoviedb.org/3/tv/${ID}/similar?api_key=${API_KEY}&language=en-US`;

  let [movies, setMovies] = useState<moviesProps | undefined>();
  let [pictures, setPictures] = useState<picturesProps | undefined>();
  let [moviesRunTime, setMoviesRunTime] = useState<moviesProps | undefined>();
  let [moviesGenres, setMoviesGenres] = useState<GenresProps | undefined>();
  let [moviesCast, setMoviesCast] = useState<CastProps | undefined>();
  let [moviesDir, setMoviesDir] = useState<CastProps | undefined>();
  let [moviesSim, setMoviesSim] = useState<moviesProps | undefined>();

  useEffect(() => {
    getMovie();
    getPicture();
    getMovieRunTime();
    getMovieGenres();
    getMovieCast();
    getMovieDir();
    getMovieSim();
  }, []);

  const getMovie = async () => {
    const { data } = await axios.get(URL);
    setMovies(data);
  };

  const getPicture = async () => {
    const { data } = await axios.get(URLIMG);
    setPictures(data.backdrops[0]);
  };

  const getMovieRunTime = async () => {
    const { data } = await axios.get(URL);
    setMoviesRunTime(data.episode_run_time);
  };

  const getMovieGenres = async () => {
    const { data } = await axios.get(URL);
    setMoviesGenres(data.genres);
  };

  const getMovieCast = async () => {
    const { data } = await axios.get(URLCAST);
    setMoviesCast(data.cast.slice(0, 9));
  };

  const getMovieDir = async () => {
    const { data } = await axios.get(URLCAST);
    setMoviesDir(data.crew.slice(0, 4));
  };

  const getMovieSim = async () => {
    const { data } = await axios.get(URLSIMMOVIES);
    setMoviesSim(data.results);
  };

  function refreshPage() {
    setTimeout(() => {
      window.location.reload();
    }, 1);
  }

  return (
    <>
      <div className="banner">
        <img
          src={`https://image.tmdb.org/t/p/original` + pictures?.file_path}
          alt="poster"
        />
        <div className="options">
          <NavLink className="poster" to={`/Player/Serie/${movies?.id}`}>
            <button>Play</button>
          </NavLink>
          <button>Watchlist</button>
          <button>Fave</button>
        </div>
      </div>

      <SeriesInfo />
      <SeriesSuggestion />
    </>
  );
}

export default SeriesDetails;
