import React from "react";
import { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";
import SeriesInfo from "./SeriesInfo";
import SeriesSuggestion from "./SeriesSuggestion";

const API: any = process.env.REACT_APP_API_KEY;

const API_KEY = API.replace(";", "");

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

interface picturesProps {
  map(arg0: (item: any) => JSX.Element): import("react").ReactNode;
  file_path: string;
}

function SeriesDetails() {
  let id = useParams();
  const ID = id.id;
  const URL = `https://api.themoviedb.org/3/tv/${ID}?api_key=${API_KEY}&language=en-US`;
  const URLIMG = `https://api.themoviedb.org/3/tv/${ID}/images?api_key=${API_KEY}`;

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

  //--------------------

  //___________________________

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index: any) => {
    setToggleState(index);
  };

  //___________________________

  //-------------------

  return (
    <>
      <div className="banner">
        <img
          src={`https://image.tmdb.org/t/p/original` + pictures?.file_path}
          alt="poster"
        />
        <div className="options">
          <NavLink className="poster" to={`/Player/Serie/${movies?.id}`}>
            <i className="fa-solid fa-play"></i>
          </NavLink>
          <i className="fa-solid fa-plus"></i>
          <i className="fa-solid fa-heart"></i>
        </div>
      </div>

      <div className="button_info">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Details
        </button>

        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Suggestions
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <SeriesInfo />;
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <SeriesSuggestion />
        </div>
      </div>
    </>
  );
}

export default SeriesDetails;
