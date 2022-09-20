import Poster from "../img/poster_default.png";
import { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";

const API: any = process.env.REACT_APP_API_KEY;

const API_KEY = API.replace(";", "");

interface moviesProps {
  map(arg0: (item: any) => JSX.Element): import("react").ReactNode;
  id: number;
  overview: string;
  poster_path: string;
  title: string;
  backdrop_path: string;
  media_type: string;
  know_for: string;
}

interface knowFor {
  map(arg0: (item: any) => JSX.Element): import("react").ReactNode;
  id: number;
  poster_path: string;
  title: string;
  media_type: string;
}

function Search() {
  let [SearchMovies, setSearchMovies] = useState<moviesProps | undefined>();
  let [SearchMoviesTV, setSearchMoviesTV] = useState<moviesProps | undefined>();
  let [SearchMoviesKnowFor, setSearchMoviesKnowFor] = useState<
    knowFor | undefined
  >();
  let id = useParams();
  const ID = id.id;
  const URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${ID}`;
  const URLTV = `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&language=en-US&query=${ID}`;
  const URLKF = `https://api.themoviedb.org/3/search/person?api_key=${API_KEY}&query=${ID}`;

  useEffect(() => {
    getMovies();
    getMoviesTV();
    KnowFor();
  }, []);

  const getMovies = async () => {
    const { data } = await axios.get(URL);
    setSearchMovies(data.results);
  };

  const getMoviesTV = async () => {
    const { data } = await axios.get(URLTV);
    setSearchMoviesTV(data.results);
  };

  const KnowFor = async () => {
    const { data } = await axios.get(URLKF);
    setSearchMoviesKnowFor(data.results[0].known_for);
  };

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
      <h1>Results for {ID}</h1> <br />
      <div className="container_genre">
        {SearchMovies?.map((movie) => (
          <NavLink className="poster" to={`/movie/${movie.id}`}>
            <div id={movie.id} className="movies_container_poster">
              <img src={GetPictures(movie.poster_path)} alt="poster" />
            </div>
          </NavLink>
        ))}

        {SearchMoviesTV?.map((movieTV) => (
          <NavLink className="poster" to={`/tv/${movieTV.id}`}>
            <div id={movieTV.id} className="movies_container_poster">
              <img src={GetPictures(movieTV.poster_path)} alt="poster" />
            </div>
          </NavLink>
        ))}

        {SearchMoviesKnowFor?.map((movieKF) => (
          <NavLink
            className="poster"
            to={`/${movieKF.media_type}/${movieKF.id}`}
          >
            <div id={movieKF.id} className="movies_container_poster">
              <img src={GetPictures(movieKF.poster_path)} alt="poster" />
            </div>
          </NavLink>
        ))}
      </div>
    </>
  );
}

export default Search;
