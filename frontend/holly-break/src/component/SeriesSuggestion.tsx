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
  name: string;
  tagline: string;
  first_air_date: string;
  last_air_date: string;
  0: string;
  number_of_seasons: string;
  number_of_episodes: string;
  vote_average: string;
}

interface GenresProps {
  map(arg0: (item: any) => JSX.Element): import("react").ReactNode;
  id: number;
  name: string;
}

interface picturesProps {
  map(arg0: (item: any) => JSX.Element): import("react").ReactNode;
  file_path: string;
}

interface CastProps {
  map(arg0: (item: any) => JSX.Element): import("react").ReactNode;
  id: number;
  name: string;
  character: string;
  profile_path: string;
}

function SeriesSuggestion() {
  let id = useParams();
  const ID = id.id;
  const URLSIMMOVIES = `https://api.themoviedb.org/3/tv/${ID}/similar?api_key=${API_KEY}&language=en-US`;

  let [moviesSim, setMoviesSim] = useState<moviesProps | undefined>();

  useEffect(() => {
    getMovieSim();
  }, []);

  const getMovieSim = async () => {
    const { data } = await axios.get(URLSIMMOVIES);
    setMoviesSim(data.results);
  };

  function refreshPage() {
    setTimeout(() => {
      window.location.reload();
    }, 1);
  }

  return (
    <>
      <div className="suggestions">
        <h3>Suggestions</h3>
        <div className="poster_movies">
          {moviesSim?.map((movieSim) => (
            <NavLink
              className="poster"
              onClick={refreshPage}
              to={`/tv/${movieSim.id}`}
            >
              <div id={movieSim.id} className="movies_container_poster">
                <img
                  src={`https://image.tmdb.org/t/p/w500` + movieSim.poster_path}
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

export default SeriesSuggestion;
