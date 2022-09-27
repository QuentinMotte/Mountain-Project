import React from "react";
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
}

function MoviesGenre() {
  let id = useParams();
  const ID = id.id;
  const URL1 = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&with_genres=${ID}`;
  const URL2 = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=2&with_genres=${ID}`;
  const URL3 = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=3&with_genres=${ID}`;
  const URL4 = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=4&with_genres=${ID}`;
  const URL5 = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=5&with_genres=${ID}`;

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
      <div className="container_genre">
        {movies1?.map((movie1) => (
          <NavLink className="poster" to={`/Movie/${movie1.id}`}>
            <div id={movie1.id} className="movies_container_poster">
              <img src={GetPictures(movie1.poster_path)} alt="poster" />
            </div>
          </NavLink>
        ))}

        {movies2?.map((movie2) => (
          <NavLink className="poster" to={`/Movie/${movie2.id}`}>
            <div id={movie2.id} className="movies_container_poster">
              <img src={GetPictures(movie2.poster_path)} alt="poster" />
            </div>
          </NavLink>
        ))}

        {movies3?.map((movie3) => (
          <NavLink className="poster" to={`/Movie/${movie3.id}`}>
            <div id={movie3.id} className="movies_container_poster">
              <img src={GetPictures(movie3.poster_path)} alt="poster" />
            </div>
          </NavLink>
        ))}

        {movies4?.map((movie4) => (
          <NavLink className="poster" to={`/Movie/${movie4.id}`}>
            <div id={movie4.id} className="movies_container_poster">
              <img src={GetPictures(movie4.poster_path)} alt="poster" />
            </div>
          </NavLink>
        ))}

        {movies5?.map((movie5) => (
          <NavLink className="poster" to={`/Movie/${movie5.id}`}>
            <div id={movie5.id} className="movies_container_poster">
              <img src={GetPictures(movie5.poster_path)} alt="poster" />
            </div>
          </NavLink>
        ))}
      </div>
    </>
  );
}

export default MoviesGenre;
