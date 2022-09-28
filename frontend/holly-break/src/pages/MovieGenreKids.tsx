import React from "react";
import Poster from "../img/poster_default.png";
import { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import Footer from "../component/Footer";
import Header from "../component/Header";
import axios from "axios";
const Slider = require("react-slick").default;

const API: any = process.env.REACT_APP_API_KEY;

const API_KEY = API.replace(";", "");

interface moviesProps {
  map(arg0: (item: any) => JSX.Element): import("react").ReactNode;
  backdrop_path: string;
  poster_path: string;
  id: string;
  overview: string;
  title: string;
  tagline: string;
  name: string;
}

function MovieGenreKids() {
  let id = useParams();
  const ID = id.id;
  const URL1 = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&include_adult=false&certification_country=US&certification.lte=G&sort_by=popularity.desc&page=1&include_adult=false&with_genres=${ID}`;
  const URL2 = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&include_adult=false&certification_country=US&certification.lte=G&sort_by=popularity.desc&page=2&include_adult=false&with_genres=${ID}`;
  const URL3 = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&include_adult=false&certification_country=US&certification.lte=G&sort_by=popularity.desc&page=3&include_adult=false&with_genres=${ID}`;
  const URL4 = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&include_adult=false&certification_country=US&certification.lte=G&sort_by=popularity.desc&page=4&include_adult=false&with_genres=${ID}`;
  const URL5 = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&include_adult=false&certification_country=US&certification.lte=G&sort_by=popularity.desc&page=5&include_adult=false&with_genres=${ID}`;

  useEffect(() => {
    getMovies1();
    getMovies2();
    getMovies3();
    getMovies4();
    getMovies5();
  }, []);

  let [movies1, setMovies1] = useState<moviesProps | undefined>();
  let [movies2, setMovies2] = useState<moviesProps | undefined>();
  let [movies3, setMovies3] = useState<moviesProps | undefined>();
  let [movies4, setMovies4] = useState<moviesProps | undefined>();
  let [movies5, setMovies5] = useState<moviesProps | undefined>();

  const getMovies1 = async () => {
    const { data } = await axios.get(URL1);
    setMovies1(data.results);
  };

  const getMovies2 = async () => {
    const { data } = await axios.get(URL2);
    setMovies2(data.results);
  };

  const getMovies3 = async () => {
    const { data } = await axios.get(URL3);
    setMovies3(data.results);
  };

  const getMovies4 = async () => {
    const { data } = await axios.get(URL4);
    setMovies4(data.results);
  };

  const getMovies5 = async () => {
    const { data } = await axios.get(URL5);
    setMovies5(data.results);
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
      <Header></Header>
      <main className="content-container">
        <div className="container_genre">
          {movies1?.map((movie1) => (
            <NavLink className="poster" to={`/Movie/${movie1.id}`}>
              <div id={movie1.id} className="movies_container_poster">
                <img src={GetPictures(movie1.poster_path)} alt="poster" />
                <div className="poster_info_tr">
                  <h2>{movie1.title}</h2>
                  <h2>{movie1.name}</h2>
                  <p>{movie1.vote_average}</p>
                </div>
              </div>
            </NavLink>
          ))}

          {movies2?.map((movie2) => (
            <NavLink className="poster" to={`/Movie/${movie2.id}`}>
              <div id={movie2.id} className="movies_container_poster">
                <img src={GetPictures(movie2.poster_path)} alt="poster" />
                <div className="poster_info_tr">
                  <h2>{movie2.title}</h2>
                  <h2>{movie2.name}</h2>
                  <p>{movie2.vote_average}</p>
                </div>
              </div>
            </NavLink>
          ))}

          {movies3?.map((movie3) => (
            <NavLink className="poster" to={`/Movie/${movie3.id}`}>
              <div id={movie3.id} className="movies_container_poster">
                <img src={GetPictures(movie3.poster_path)} alt="poster" />
                <div className="poster_info_tr">
                  <h2>{movie3.title}</h2>
                  <h2>{movie3.name}</h2>
                  <p>{movie3.vote_average}</p>
                </div>
              </div>
            </NavLink>
          ))}

          {movies4?.map((movie4) => (
            <NavLink className="poster" to={`/Movie/${movie4.id}`}>
              <div id={movie4.id} className="movies_container_poster">
                <img src={GetPictures(movie4.poster_path)} alt="poster" />
                <div className="poster_info_tr">
                  <h2>{movie4.title}</h2>
                  <h2>{movie4.name}</h2>
                  <p>{movie4.vote_average}</p>
                </div>
              </div>
            </NavLink>
          ))}

          {movies5?.map((movie5) => (
            <NavLink className="poster" to={`/Movie/${movie5.id}`}>
              <div id={movie5.id} className="movies_container_poster">
                <img src={GetPictures(movie5.poster_path)} alt="poster" />
                <div className="poster_info_tr">
                  <h2>{movie5.title}</h2>
                  <h2>{movie5.name}</h2>
                  <p>{movie5.vote_average}</p>
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}

export default MovieGenreKids;
