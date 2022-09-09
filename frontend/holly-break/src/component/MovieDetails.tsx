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
  title: string;
  tagline: string;
}

interface picturesProps {
  map(arg0: (item: any) => JSX.Element): import("react").ReactNode;
  file_path: string;
}

function MovieDetails() {
  let id = useParams();
  const ID = id.id;
  const URL = `https://api.themoviedb.org/3/movie/${ID}?api_key=${API_KEY}&language=en-US`;
  const URLIMG = `https://api.themoviedb.org/3/movie/${ID}/images?api_key=${API_KEY}`;

  console.log(URL);

  let [movies, setMovies] = useState<moviesProps | undefined>();
  let [pictures, setPictures] = useState<picturesProps | undefined>();

  useEffect(() => {
    getMovie();
    getPicture();
  }, []);

  const getMovie = async () => {
    const { data } = await axios.get(URL);
    setMovies(data);
  };

  const getPicture = async () => {
    const { data } = await axios.get(URLIMG);
    setPictures(data.backdrops[0]);
  };

  return (
    <>
      <div className="banner">
        <img
          src={`https://image.tmdb.org/t/p/original` + pictures?.file_path}
          alt="poster"
        />
      </div>
      <div>
        <NavLink className="poster" to={`/Player/Movie/${movies?.id}`}>
          <button>Play</button>
        </NavLink>
      </div>
    </>
  );
}

export default MovieDetails;
