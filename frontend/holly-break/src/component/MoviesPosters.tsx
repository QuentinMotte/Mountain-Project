import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

const API_KEY = "a378b12e0a9383634a503a8f29d43915";

interface moviesProps {
  map(arg0: (item: any) => JSX.Element): import("react").ReactNode;
  id: number;
  overview: string;
  poster_path: string;
  title: string;
  backdrop_path: string;
}

export function MoviesPosters() {
  const URLHB = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc`;

  const URLDrama = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=18`;

  const URLFantasy = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=14`;

  const URLHistory = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=36`;

  const URLComedy = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`;

  const URLThriller = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=53`;

  const URLHorror = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`;

  const URLAction = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`;

  const URLAdventure = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=12`;

  const URLCrime = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=80`;

  const URLWar = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10752`;

  const URLWestern = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=37`;

  const URLSyfy = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=878`;

  const URLRomance = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`;

  const URLMystery = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=9648`;

  const URLTVMovie = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10770`;

  const URLAnimation = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=16`;

  const UrlFamily = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10751`;

  const UrlMusic = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10402`;

  const URLDoc = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=99`;

  let [moviesTrend, setMoviesTrend] = useState<moviesProps | undefined>();
  let [moviesDrama, setMoviesDrama] = useState<moviesProps | undefined>();
  let [moviesFantasy, setMoviesFantasy] = useState<moviesProps | undefined>();
  let [moviesHistory, setMoviesHistory] = useState<moviesProps | undefined>();
  let [moviesComedy, setMoviesComedy] = useState<moviesProps | undefined>();
  let [moviesThriller, setMoviesThriller] = useState<moviesProps | undefined>();
  let [moviesHorror, setMoviesHorror] = useState<moviesProps | undefined>();
  let [moviesAction, setMoviesAction] = useState<moviesProps | undefined>();
  let [moviesAdventure, setMoviesAdventure] = useState<
    moviesProps | undefined
  >();
  let [moviesCrime, setMoviesCrime] = useState<moviesProps | undefined>();
  let [moviesWar, setMoviesWar] = useState<moviesProps | undefined>();
  let [moviesWestern, setMoviesWestern] = useState<moviesProps | undefined>();
  let [moviesSyfy, setMoviesSyfy] = useState<moviesProps | undefined>();
  let [moviesRom, setMoviesRom] = useState<moviesProps | undefined>();
  let [moviesMyst, setMoviesMyst] = useState<moviesProps | undefined>();
  let [moviesTVMovie, setMoviesTVMOvie] = useState<moviesProps | undefined>();
  let [moviesAnimation, setMoviesAnimation] = useState<
    moviesProps | undefined
  >();
  let [moviesFam, setMoviesFam] = useState<moviesProps | undefined>();
  let [moviesMusic, setMoviesMusic] = useState<moviesProps | undefined>();
  let [moviesDoc, setMoviesDoc] = useState<moviesProps | undefined>();

  useEffect(() => {
    getMovies();
    getMoviesDrama();
    getMoviesFantasy();
    getMoviesHistory();
    getMoviesComedy();
    getMoviesThriller();
    getMoviesHorror();
    getMoviesAction();
    getMoviesAdventure();
    getMoviesCrime();
    getMoviesWar();
    getMoviesWestern();
    getMoviesSyfy();
    getMoviesRom();
    getMoviesMyst();
    getMoviesTVMovie();
    getMoviesAnimation();
    getMoviesFam();
    getMoviesMusic();
    getMoviesDoc();
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

  const getMoviesThriller = async () => {
    const { data } = await axios.get(URLThriller);
    setMoviesThriller(data.results);
  };

  const getMoviesHorror = async () => {
    const { data } = await axios.get(URLHorror);
    setMoviesHorror(data.results);
  };

  const getMoviesAction = async () => {
    const { data } = await axios.get(URLAction);
    setMoviesAction(data.results);
  };

  const getMoviesAdventure = async () => {
    const { data } = await axios.get(URLAdventure);
    setMoviesAdventure(data.results);
  };

  const getMoviesCrime = async () => {
    const { data } = await axios.get(URLCrime);
    setMoviesCrime(data.results);
  };

  const getMoviesWar = async () => {
    const { data } = await axios.get(URLWar);
    setMoviesWar(data.results);
  };

  const getMoviesWestern = async () => {
    const { data } = await axios.get(URLWestern);
    setMoviesWestern(data.results);
  };

  const getMoviesSyfy = async () => {
    const { data } = await axios.get(URLSyfy);
    setMoviesSyfy(data.results);
  };

  const getMoviesRom = async () => {
    const { data } = await axios.get(URLRomance);
    setMoviesRom(data.results);
  };

  const getMoviesMyst = async () => {
    const { data } = await axios.get(URLMystery);
    setMoviesMyst(data.results);
  };

  const getMoviesTVMovie = async () => {
    const { data } = await axios.get(URLTVMovie);
    setMoviesTVMOvie(data.results);
  };

  const getMoviesAnimation = async () => {
    const { data } = await axios.get(URLAnimation);
    setMoviesAnimation(data.results);
  };

  const getMoviesFam = async () => {
    const { data } = await axios.get(UrlFamily);
    setMoviesFam(data.results);
  };

  const getMoviesMusic = async () => {
    const { data } = await axios.get(UrlMusic);
    setMoviesMusic(data.results);
  };

  const getMoviesDoc = async () => {
    const { data } = await axios.get(URLDoc);
    setMoviesDoc(data.results);
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
                src={
                  `https://image.tmdb.org/t/p/original` + movie.backdrop_path
                }
                alt="poster"
              />
              <div className="title">
                <NavLink className="poster" to={`/Movie/${movie.id}`}>
                  <p className="title_opacity">{movie.title}</p>
                </NavLink>
              </div>
            </div>
          ))}
        </div>
        <i className="fa-solid fa-arrow-right"></i>
      </div>

      <div className="container_loop_movies">
        <NavLink className="genre" to={`/Movie/Genre/18`}>
          <h3>Drama</h3>
          <i className="fa-solid fa-arrow-right"></i>
        </NavLink>
        <div className="poster_movies">
          {moviesDrama?.map((movieDrama) => (
            <NavLink className="poster" to={`/Movie/${movieDrama.id}`}>
              <div id={movieDrama.id} className="movies_container_poster">
                <img
                  src={
                    `https://image.tmdb.org/t/p/w500` + movieDrama.poster_path
                  }
                  alt="poster"
                />
              </div>
            </NavLink>
          ))}
        </div>
      </div>

      <div className="container_loop_movies">
        <NavLink className="genre" to={`/Movie/Genre/14`}>
          <h3>Fantasy</h3>
          <i className="fa-solid fa-arrow-right"></i>
        </NavLink>
        <div className="poster_movies">
          {moviesFantasy?.map((movieFantasy) => (
            <NavLink className="poster" to={`/Movie/${movieFantasy.id}`}>
              <div id={movieFantasy.id} className="movies_container_poster">
                <img
                  src={
                    `https://image.tmdb.org/t/p/w500` + movieFantasy.poster_path
                  }
                  alt="poster"
                />
              </div>
            </NavLink>
          ))}
        </div>
      </div>

      <div className="container_loop_movies">
        <NavLink className="genre" to={`/Movie/Genre/36`}>
          <h3>History</h3>
          <i className="fa-solid fa-arrow-right"></i>
        </NavLink>
        <div className="poster_movies">
          {moviesHistory?.map((movieHistory) => (
            <NavLink className="poster" to={`/Movie/${movieHistory.id}`}>
              <div id={movieHistory.id} className="movies_container_poster">
                <img
                  src={
                    `https://image.tmdb.org/t/p/w500` + movieHistory.poster_path
                  }
                  alt="poster"
                />
              </div>
            </NavLink>
          ))}
        </div>
      </div>

      <div className="container_loop_movies">
        <NavLink className="genre" to={`/Movie/Genre/35`}>
          <h3>Comedy</h3>
          <i className="fa-solid fa-arrow-right"></i>
        </NavLink>
        <div className="poster_movies">
          {moviesComedy?.map((movieComedy) => (
            <NavLink className="poster" to={`/Movie/${movieComedy.id}`}>
              <div id={movieComedy.id} className="movies_container_poster">
                <img
                  src={
                    `https://image.tmdb.org/t/p/w500` + movieComedy.poster_path
                  }
                  alt="poster"
                />
              </div>
            </NavLink>
          ))}
        </div>
      </div>

      <div className="container_loop_movies">
        <NavLink className="genre" to={`/Movie/Genre/53`}>
          <h3>Thriller</h3>
          <i className="fa-solid fa-arrow-right"></i>
        </NavLink>
        <div className="poster_movies">
          {moviesThriller?.map((movieThriller) => (
            <NavLink className="poster" to={`/Movie/${movieThriller.id}`}>
              <div id={movieThriller.id} className="movies_container_poster">
                <img
                  src={
                    `https://image.tmdb.org/t/p/w500` +
                    movieThriller.poster_path
                  }
                  alt="poster"
                />
              </div>
            </NavLink>
          ))}
        </div>
      </div>

      <div className="container_loop_movies">
        <NavLink className="genre" to={`/Movie/Genre/27`}>
          <h3>Horror</h3>
          <i className="fa-solid fa-arrow-right"></i>
        </NavLink>
        <div className="poster_movies">
          {moviesHorror?.map((movieHorror) => (
            <NavLink className="poster" to={`/Movie/${movieHorror.id}`}>
              <div id={movieHorror.id} className="movies_container_poster">
                <img
                  src={
                    `https://image.tmdb.org/t/p/w500` + movieHorror.poster_path
                  }
                  alt="poster"
                />
              </div>
            </NavLink>
          ))}
        </div>
      </div>

      <div className="container_loop_movies">
        <NavLink className="genre" to={`/Movie/Genre/28`}>
          <h3>Action</h3>
          <i className="fa-solid fa-arrow-right"></i>
        </NavLink>
        <div className="poster_movies">
          {moviesAction?.map((movieAction) => (
            <NavLink className="poster" to={`/Movie/${movieAction.id}`}>
              <div id={movieAction.id} className="movies_container_poster">
                <img
                  src={
                    `https://image.tmdb.org/t/p/w500` + movieAction.poster_path
                  }
                  alt="poster"
                />
              </div>
            </NavLink>
          ))}
        </div>
      </div>

      <div className="container_loop_movies">
        <NavLink className="genre" to={`/Movie/Genre/12`}>
          <h3>Adventure</h3>
          <i className="fa-solid fa-arrow-right"></i>
        </NavLink>
        <div className="poster_movies">
          {moviesAdventure?.map((movieAdventure) => (
            <NavLink className="poster" to={`/Movie/${movieAdventure.id}`}>
              <div id={movieAdventure.id} className="movies_container_poster">
                <img
                  src={
                    `https://image.tmdb.org/t/p/w500` +
                    movieAdventure.poster_path
                  }
                  alt="poster"
                />
              </div>
            </NavLink>
          ))}
        </div>
      </div>

      <div className="container_loop_movies">
        <NavLink className="genre" to={`/Movie/Genre/80`}>
          <h3>Crime</h3>
          <i className="fa-solid fa-arrow-right"></i>
        </NavLink>
        <div className="poster_movies">
          {moviesCrime?.map((movieCrime) => (
            <NavLink className="poster" to={`/Movie/${movieCrime.id}`}>
              <div id={movieCrime.id} className="movies_container_poster">
                <img
                  src={
                    `https://image.tmdb.org/t/p/w500` + movieCrime.poster_path
                  }
                  alt="poster"
                />
              </div>
            </NavLink>
          ))}
        </div>
      </div>

      <div className="container_loop_movies">
        <NavLink className="genre" to={`/Movie/Genre/10752`}>
          <h3>War</h3>
          <i className="fa-solid fa-arrow-right"></i>
        </NavLink>
        <div className="poster_movies">
          {moviesWar?.map((movieWar) => (
            <NavLink className="poster" to={`/Movie/${movieWar.id}`}>
              <div id={movieWar.id} className="movies_container_poster">
                <img
                  src={`https://image.tmdb.org/t/p/w500` + movieWar.poster_path}
                  alt="poster"
                />
              </div>
            </NavLink>
          ))}
        </div>
      </div>

      <div className="container_loop_movies">
        <NavLink className="genre" to={`/Movie/Genre/37`}>
          <h3>Western</h3>
          <i className="fa-solid fa-arrow-right"></i>
        </NavLink>
        <div className="poster_movies">
          {moviesWestern?.map((movieWestern) => (
            <NavLink className="poster" to={`/Movie/${movieWestern.id}`}>
              <div id={movieWestern.id} className="movies_container_poster">
                <img
                  src={
                    `https://image.tmdb.org/t/p/w500` + movieWestern.poster_path
                  }
                  alt="poster"
                />
              </div>
            </NavLink>
          ))}
        </div>
      </div>

      <div className="container_loop_movies">
        <NavLink className="genre" to={`/Movie/Genre/878`}>
          <h3>Sciences-Fiction</h3>
          <i className="fa-solid fa-arrow-right"></i>
        </NavLink>
        <div className="poster_movies">
          {moviesSyfy?.map((movieSyfy) => (
            <NavLink className="poster" to={`/Movie/${movieSyfy.id}`}>
              <div id={movieSyfy.id} className="movies_container_poster">
                <img
                  src={
                    `https://image.tmdb.org/t/p/w500` + movieSyfy.poster_path
                  }
                  alt="poster"
                />
              </div>
            </NavLink>
          ))}
        </div>
      </div>

      <div className="container_loop_movies">
        <NavLink className="genre" to={`/Movie/Genre/10749`}>
          <h3>Romance</h3>
          <i className="fa-solid fa-arrow-right"></i>
        </NavLink>
        <div className="poster_movies">
          {moviesRom?.map((movieRom) => (
            <NavLink className="poster" to={`/Movie/${movieRom.id}`}>
              <div id={movieRom.id} className="movies_container_poster">
                <img
                  src={`https://image.tmdb.org/t/p/w500` + movieRom.poster_path}
                  alt="poster"
                />
              </div>
            </NavLink>
          ))}
        </div>
      </div>

      <div className="container_loop_movies">
        <NavLink className="genre" to={`/Movie/Genre/9648`}>
          <h3>Mystery</h3>
          <i className="fa-solid fa-arrow-right"></i>
        </NavLink>
        <div className="poster_movies">
          {moviesMyst?.map((movieMyst) => (
            <NavLink className="poster" to={`/Movie/${movieMyst.id}`}>
              <div id={movieMyst.id} className="movies_container_poster">
                <img
                  src={
                    `https://image.tmdb.org/t/p/w500` + movieMyst.poster_path
                  }
                  alt="poster"
                />
              </div>
            </NavLink>
          ))}
        </div>
      </div>

      <div className="container_loop_movies">
        <NavLink className="genre" to={`/Movie/Genre/10770`}>
          <h3>TV Movies</h3>
          <i className="fa-solid fa-arrow-right"></i>
        </NavLink>
        <div className="poster_movies">
          {moviesTVMovie?.map((movieTV) => (
            <NavLink className="poster" to={`/Movie/${movieTV.id}`}>
              <div id={movieTV.id} className="movies_container_poster">
                <img
                  src={`https://image.tmdb.org/t/p/w500` + movieTV.poster_path}
                  alt="poster"
                />
              </div>
            </NavLink>
          ))}
        </div>
      </div>

      <div className="container_loop_movies">
        <NavLink className="genre" to={`/Movie/Genre/16`}>
          <h3>Animation</h3>
          <i className="fa-solid fa-arrow-right"></i>
        </NavLink>
        <div className="poster_movies">
          {moviesAnimation?.map((movieAnimation) => (
            <NavLink className="poster" to={`/Movie/${movieAnimation.id}`}>
              <div id={movieAnimation.id} className="movies_container_poster">
                <img
                  src={
                    `https://image.tmdb.org/t/p/w500` +
                    movieAnimation.poster_path
                  }
                  alt="poster"
                />
              </div>
            </NavLink>
          ))}
        </div>
      </div>

      <div className="container_loop_movies">
        <NavLink className="genre" to={`/Movie/Genre/10751`}>
          <h3>Family</h3>
          <i className="fa-solid fa-arrow-right"></i>
        </NavLink>
        <div className="poster_movies">
          {moviesFam?.map((movieFam) => (
            <NavLink className="poster" to={`/Movie/${movieFam.id}`}>
              <div id={movieFam.id} className="movies_container_poster">
                <img
                  src={`https://image.tmdb.org/t/p/w500` + movieFam.poster_path}
                  alt="poster"
                />
              </div>
            </NavLink>
          ))}
        </div>
      </div>

      <div className="container_loop_movies">
        <NavLink className="genre" to={`/Movie/Genre/10402`}>
          <h3>Music</h3>
          <i className="fa-solid fa-arrow-right"></i>
        </NavLink>
        <div className="poster_movies">
          {moviesMusic?.map((movieMusic) => (
            <NavLink className="poster" to={`/Movie/${movieMusic.id}`}>
              <div id={movieMusic.id} className="movies_container_poster">
                <img
                  src={
                    `https://image.tmdb.org/t/p/w500` + movieMusic.poster_path
                  }
                  alt="poster"
                />
              </div>
            </NavLink>
          ))}
        </div>
      </div>

      <div className="container_loop_movies">
        <NavLink className="genre" to={`/Movie/Genre/99`}>
          <h3>Documentary</h3>
          <i className="fa-solid fa-arrow-right"></i>
        </NavLink>
        <div className="poster_movies">
          {moviesDoc?.map((movieDoc) => (
            <NavLink className="poster" to={`/Movie/${movieDoc.id}`}>
              <div id={movieDoc.id} className="movies_container_poster">
                <img
                  src={`https://image.tmdb.org/t/p/w500` + movieDoc.poster_path}
                  alt="poster"
                />
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
}
