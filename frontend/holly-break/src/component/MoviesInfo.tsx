import React from "react";
import icon from "../img/Profile-Icon.png";
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
  name: string;
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
  job: string;
}

function MoviesInfo() {
  let id = useParams();
  const ID = id.id;
  const URL = `https://api.themoviedb.org/3/movie/${ID}?api_key=${API_KEY}&language=en-US`;
  const URLCAST = `https://api.themoviedb.org/3/movie/${ID}/credits?api_key=${API_KEY}&language=en-US`;
  const URLKEYWORD = `https://api.themoviedb.org/3/movie/${ID}/keywords?api_key=${API_KEY}`;

  let [movies, setMovies] = useState<moviesProps | undefined>();
  let [moviesGenres, setMoviesGenres] = useState<GenresProps | undefined>();
  let [moviesCast, setMoviesCast] = useState<CastProps | undefined>();
  let [moviesDir, setMoviesDir] = useState<CastProps | undefined>();
  let [moviesKEY, setMoviesKEY] = useState<moviesProps | undefined>();

  useEffect(() => {
    getMovie();
    getMovieGenres();
    getMovieCast();
    getMovieDir();
    getKEY();
  }, []);

  const getMovie = async () => {
    const { data } = await axios.get(URL);
    setMovies(data);
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

  const getKEY = async () => {
    const { data } = await axios.get(URLKEYWORD);
    setMoviesKEY(data.keywords.slice(0, 3));
  };

  function GetPictures(avatar: string) {
    switch (avatar) {
      case null:
        return icon;
      case avatar:
        return `https://image.tmdb.org/t/p/w500` + avatar;
    }
  }

  return (
    <>
      <div className="info">
        <div className="details">
          <div className="info_series_movies">
            <div className="title_container">
              <h1 className="Title">{movies?.title}</h1>
              <p className="TagLine">{movies?.tagline}</p>
              <br />

              <p className="resume">{movies?.overview}</p>
            </div>

            <div className="container_infos">
              {moviesKEY?.map((keyW: any) => (
                <p>{keyW.name}</p>
              ))}
            </div>

            <hr />

            <div className="container_infos">
              <div className="Info_duration">
                <h4>Release date:</h4>
                <br />
                <p className="airDate">{movies?.release_date}</p>
                <br />
                <h4>Duration:</h4>
                <br />
                <p className="RunTime">{movies?.runtime} min</p>
              </div>

              <div>
                <h4>Genre:</h4>
                <br />
                <div className="genre_container">
                  {moviesGenres?.map((genres) => (
                    <div className="genres">
                      <NavLink
                        className="genre"
                        to={`/movie/Genre/${genres.id}`}
                      >
                        <a className="genre_button">{genres.name}</a>
                      </NavLink>
                    </div>
                  ))}
                </div>
              </div>

              <div className="date">
                <h4>Crew:</h4>
                <br />
                {moviesDir?.map((crew) => (
                  <>
                    <p>
                      {crew.job} / {crew.name}
                    </p>
                    <br />
                  </>
                ))}
              </div>
            </div>
          </div>

          <div className="info_cast">
            {moviesCast?.map((cast) => (
              <div>
                <NavLink className="genre" to={`/Actor/${cast.id}`}>
                  <img src={GetPictures(cast.profile_path)} alt="cast" />
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

export default MoviesInfo;
