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
  name: string;
  vote_average: number;
}

interface knowFor {
  map(arg0: (item: any) => JSX.Element): import("react").ReactNode;
  id: number;
  poster_path: string;
  title: string;
  media_type: string;
  name: string;
  vote_average: number;
}

function Search() {
  let [SearchMovies, setSearchMovies] = useState<moviesProps | undefined>();
  let [SearchMoviesTV, setSearchMoviesTV] = useState<moviesProps | undefined>();
  let [SearchMoviesKnowFor, setSearchMoviesKnowFor] = useState<
    knowFor | undefined
  >();
  let id = useParams();
  const ID = id.id;
  const URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&include_adult=false&query=${ID}`;
  const URLTV = `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&language=en-US&include_adult=false&query=${ID}`;
  const URLKF = `https://api.themoviedb.org/3/search/person?api_key=${API_KEY}&include_adult=false&query=${ID}`;

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
        return `https://image.tmdb.org/t/p/original` + avatar;
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
              <div className="poster_info_tr">
                <h2>{movie.title}</h2>
                <h2>{movie.name}</h2>
                <p>{movie.vote_average}</p>
              </div>
            </div>
          </NavLink>
        ))}

        {SearchMoviesTV?.map((movieTV) => (
          <NavLink className="poster" to={`/tv/${movieTV.id}`}>
            <div id={movieTV.id} className="movies_container_poster">
              <img src={GetPictures(movieTV.poster_path)} alt="poster" />
              <div className="poster_info_tr">
                <h2>{movieTV.title}</h2>
                <h2>{movieTV.name}</h2>
                <p>{movieTV.vote_average}</p>
              </div>
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
              <div className="poster_info_tr">
                <h2>{movieKF.title}</h2>
                <h2>{movieKF.name}</h2>
                <p>{movieKF.vote_average}</p>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </>
  );
}

export default Search;
