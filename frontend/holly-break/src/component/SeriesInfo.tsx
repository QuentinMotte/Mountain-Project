import React from "react";
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

interface CastProps {
  map(arg0: (item: any) => JSX.Element): import("react").ReactNode;
  id: number;
  name: string;
  character: string;
  profile_path: string;
}

function SeriesInfo() {
  let id = useParams();
  const ID = id.id;
  const URL = `https://api.themoviedb.org/3/tv/${ID}?api_key=${API_KEY}&language=en-US`;
  const URLCAST = `https://api.themoviedb.org/3/tv/${ID}/credits?api_key=${API_KEY}&language=en-US`;

  let [movies, setMovies] = useState<moviesProps | undefined>();
  let [moviesRunTime, setMoviesRunTime] = useState<moviesProps | undefined>();
  let [moviesGenres, setMoviesGenres] = useState<GenresProps | undefined>();
  let [moviesCast, setMoviesCast] = useState<CastProps | undefined>();
  let [moviesDir, setMoviesDir] = useState<CastProps | undefined>();

  useEffect(() => {
    getMovie();
    getMovieRunTime();
    getMovieGenres();
    getMovieCast();
    getMovieDir();
  }, []);

  const getMovie = async () => {
    const { data } = await axios.get(URL);
    setMovies(data);
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

  return (
    <>
      <div className="info">
        <div className="details">
          <div className="info_series_movies">
            <div className="title_container">
              <h1 className="Title">{movies?.name}</h1>
              <p className="TagLine">{movies?.tagline}</p>
            </div>

            <div className="genre_container">
              {moviesGenres?.map((genres) => (
                <div className="genres">
                  <NavLink className="genre" to={`/Serie/Genre/${genres.id}`}>
                    <button className="genre_button">{genres.name}</button>
                  </NavLink>
                </div>
              ))}
            </div>

            <div className="date">
              <p className="airDate">
                First air date: {movies?.first_air_date}
              </p>
              <p className="airDate">Last air date: {movies?.last_air_date}</p>
              <p className="RunTime">Run time: {moviesRunTime?.[0]} min</p>
              <p className="note">Note: {movies?.vote_average}</p>
            </div>

            <div className="date">
              {moviesDir?.map((crew) => (
                <p>
                  {crew.job} / {crew.name}
                </p>
              ))}
            </div>
            <div className="date">
              <p className="seasons">
                Number of seasons: {movies?.number_of_seasons}
              </p>
              <p className="episodes">
                Number of episodes: {movies?.number_of_episodes}
              </p>
            </div>

            <p className="resume">{movies?.overview}</p>
          </div>
          <div className="info_cast">
            {moviesCast?.map((cast) => (
              <div>
                <NavLink className="genre" to={`/Actor/${cast.id}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500` + cast.profile_path}
                    alt="cast"
                  />
                </NavLink>
                <p className="cast">{cast.name}</p>
                <p className="character">{cast.character}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default SeriesInfo;
