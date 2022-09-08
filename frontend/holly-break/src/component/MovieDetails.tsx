import React from "react";
import { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";

const img = `https://image.tmdb.org/t/p/w300`;
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

function MovieDetails() {
  let id = useParams();
  const ID = id.id;
  const URL = `https://api.themoviedb.org/3/movie/${ID}?api_key=${API_KEY}&language=en-US`;

  console.log(URL);

  let [movies, setMovies] = useState<moviesProps | undefined>();

  useEffect(() => {
    getMovie();
  }, []);

  const getMovie = async () => {
    const { data } = await axios.get(URL);
    setMovies(data);
  };

  return (
    <>
      <div>
        <h1>{movies?.title}</h1>
        <img
          src={`https://image.tmdb.org/t/p/w300` + movies?.poster_path}
          alt="poster"
        />
      </div>
    </>
  );
}

export default MovieDetails;
