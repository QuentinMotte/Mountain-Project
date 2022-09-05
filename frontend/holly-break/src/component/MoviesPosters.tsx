import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const img = `https://image.tmdb.org/t/p/w300`;

interface movies {
  id: number;
  overview: string;
  poster_path: string;
  title: string;
}

const URL =
  "https://api.themoviedb.org/3/discover/movie?api_key=a378b12e0a9383634a503a8f29d43915&language=en-US&sort_by=popularity.desc";

function MoviesPosters() {
  const [movie, setMovie] = useState("");

  useEffect(() => {
    const url = URL;

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setMovie(json.results[0].title);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>{movie}</h1>
    </div>
  );
}

export default MoviesPosters;
