import { useState, useEffect } from "react";
import axios from "axios";

const img = `https://image.tmdb.org/t/p/w300`;

interface moviesProps {
  map(arg0: (item: any) => JSX.Element): import("react").ReactNode;
  id: number;
  overview: string;
  poster_path: string;
  title: string;
  backdrop_path: string;
}

export function MoviesPosters() {
  const URLHB =
    "https://api.themoviedb.org/3/discover/movie?api_key=a378b12e0a9383634a503a8f29d43915&language=en-US&sort_by=popularity.desc";

  const URLDrama =
    "https://api.themoviedb.org/3/discover/movie?api_key=a378b12e0a9383634a503a8f29d43915&language=en-US&with_genres=18";

  const URLFantasy =
    "https://api.themoviedb.org/3/discover/movie?api_key=a378b12e0a9383634a503a8f29d43915&language=en-US&with_genres=14";

  const URLHistory =
    "https://api.themoviedb.org/3/discover/movie?api_key=a378b12e0a9383634a503a8f29d43915&language=en-US&with_genres=36";

  const URLComedy =
    "https://api.themoviedb.org/3/discover/movie?api_key=a378b12e0a9383634a503a8f29d43915&language=en-US&with_genres=35";

  const URLHorror =
    "https://api.themoviedb.org/3/discover/movie?api_key=a378b12e0a9383634a503a8f29d43915&language=en-US&with_genres=27";

  let [moviesTrend, setMoviesTrend] = useState<moviesProps | undefined>();
  let [moviesDrama, setMoviesDrama] = useState<moviesProps | undefined>();
  let [moviesFantasy, setMoviesFantasy] = useState<moviesProps | undefined>();
  let [moviesHistory, setMoviesHistory] = useState<moviesProps | undefined>();
  let [moviesComedy, setMoviesComedy] = useState<moviesProps | undefined>();
  let [moviesHorror, setMoviesHorror] = useState<moviesProps | undefined>();

  useEffect(() => {
    getMovies();
    getMoviesDrama();
    getMoviesFantasy();
    getMoviesHistory();
    getMoviesComedy();
    getMoviesHorror();
  }, []);

  const getMovies = async () => {
    const { data } = await axios.get(URLHB);
    setMoviesTrend(data.results);
  };

  const getMoviesDrama = async () => {
    const { data } = await axios.get(URLDrama);
    setMoviesDrama(data.results);
  };

  const getMoviesFantasy = async () => {
    const { data } = await axios.get(URLFantasy);
    setMoviesFantasy(data.results);
  };

  const getMoviesHistory = async () => {
    const { data } = await axios.get(URLHistory);
    setMoviesHistory(data.results);
  };

  const getMoviesComedy = async () => {
    const { data } = await axios.get(URLComedy);
    setMoviesComedy(data.results);
  };

  const getMoviesHorror = async () => {
    const { data } = await axios.get(URLHorror);
    setMoviesHorror(data.results);
  };

  return (
    <>
      <h1>Movies</h1>
      <div className="container_herobanner">
        <i className="fa-solid fa-arrow-left"></i>
        <div className="herobanner">
          {moviesTrend?.map((movie) => (
            <div id={movie.id} className="movies_popular">
              <img
                src={`https://image.tmdb.org/t/p/w300` + movie.backdrop_path}
                alt="poster"
              />
              <div className="title">
                <p className="title_opacity">{movie.title}</p>
              </div>
            </div>
          ))}
        </div>
        <i className="fa-solid fa-arrow-right"></i>
      </div>

      <div className="container_loop_movies">
        <div className="genre">
          <h3>Drama</h3>
          <i className="fa-solid fa-arrow-right"></i>
        </div>
        <div className="poster_movies">
          {moviesDrama?.map((movieDrama) => (
            <div id={movieDrama.id} className="movies_container_poster">
              <img
                src={`https://image.tmdb.org/t/p/w300` + movieDrama.poster_path}
                alt="poster"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="container_loop_movies">
        <div className="genre">
          <h3>Fantasy</h3>
          <i className="fa-solid fa-arrow-right"></i>
        </div>
        <div className="poster_movies">
          {moviesFantasy?.map((movieFantasy) => (
            <div id={movieFantasy.id} className="movies_container_poster">
              <img
                src={
                  `https://image.tmdb.org/t/p/w300` + movieFantasy.poster_path
                }
                alt="poster"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="container_loop_movies">
        <div className="genre">
          <h3>History</h3>
          <i className="fa-solid fa-arrow-right"></i>
        </div>
        <div className="poster_movies">
          {moviesHistory?.map((movieHistory) => (
            <div id={movieHistory.id} className="movies_container_poster">
              <img
                src={
                  `https://image.tmdb.org/t/p/w300` + movieHistory.poster_path
                }
                alt="poster"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="container_loop_movies">
        <div className="genre">
          <h3>Comedy</h3>
          <i className="fa-solid fa-arrow-right"></i>
        </div>
        <div className="poster_movies">
          {moviesComedy?.map((movieComedy) => (
            <div id={movieComedy.id} className="movies_container_poster">
              <img
                src={
                  `https://image.tmdb.org/t/p/w300` + movieComedy.poster_path
                }
                alt="poster"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="container_loop_movies">
        <div className="genre">
          <h3>Horror</h3>
          <i className="fa-solid fa-arrow-right"></i>
        </div>
        <div className="poster_movies">
          {moviesHorror?.map((movieHorror) => (
            <div id={movieHorror.id} className="movies_container_poster">
              <img
                src={
                  `https://image.tmdb.org/t/p/w300` + movieHorror.poster_path
                }
                alt="poster"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
