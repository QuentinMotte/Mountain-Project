import React from "react";
import { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";

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

  console.log(URL);

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
    setMoviesDir(data.crew.slice(0, 3));
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

      <div className="info">
        <div className="button_info">
          <button className="tabs active-tabs">Details</button>
          <button className="tabs">Suggestions</button>
        </div>

        <div className="details">
          <div className="info_series_movies">
            <h2 className="Title">{movies?.name}</h2>
            <p className="TagLine">{movies?.tagline}</p>
            <div className="crew">
              {moviesDir?.map((crew) => (
                <p>
                  {crew.job} / {crew.name}
                </p>
              ))}
            </div>
            <p className="airDate">First air date: {movies?.first_air_date}</p>
            <p className="airDate">Last air date: {movies?.last_air_date}</p>
            <p className="RunTime">Run time: {moviesRunTime?.[0]} min</p>
            <div className="genre_container">
              {moviesGenres?.map((genres) => (
                <div className="genres">
                  <NavLink className="genre" to={`/Serie/Genre/${genres.id}`}>
                    <button className="genre_button">{genres.name}</button>
                  </NavLink>
                </div>
              ))}
            </div>

            <p className="resume">{movies?.overview}</p>
            <p className="seasons">
              Number of seasons: {movies?.number_of_seasons}
            </p>
            <p className="episodes">
              Number of episodes: {movies?.number_of_episodes}
            </p>
            <p className="note">Note: {movies?.vote_average}</p>
          </div>
          <div className="info_cast">
            {moviesCast?.map((cast) => (
              <div>
                <img
                  src={`https://image.tmdb.org/t/p/w500` + cast.profile_path}
                  alt="cast"
                />
                <p className="cast">{cast.name}</p>
                <p className="character">{cast.character}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="suggestions">
          <h3>Suggestions</h3>
          <div className="poster_movies">
            {moviesSim?.map((movieSim) => (
              <NavLink
                className="poster"
                onClick={refreshPage}
                to={`/tv/${movieSim.id}`}
              >
                <div id={movieSim.id} className="movies_container_poster">
                  <img
                    src={
                      `https://image.tmdb.org/t/p/w500` + movieSim.poster_path
                    }
                    alt="poster"
                  />
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default SeriesDetails;
