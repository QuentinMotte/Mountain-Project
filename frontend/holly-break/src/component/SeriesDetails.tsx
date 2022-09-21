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

  //___________________________

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index: any) => {
    setToggleState(index);
  };

  //___________________________

  const id_profile = localStorage.getItem("profile");
  const [watchlist, setWatchlist] = useState(false);
  const [favorite, setFavorite] = useState(false);

  //___________________________

  async function pushWatchlist(id: any) {
    axios
      .patch(
        `http://localhost:5000/api/profile/watchlist_serie/${id_profile}`,
        {
          watchList_serie: id,
        }
      )
      .then((res) => {
        // window.location.reload();
        setWatchlist(true);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const checkWatchlist = async () => {
    const { data } = await axios.get(
      `http://localhost:5000/api/profile/${id_profile}`
    );
    const watchlist = data.watchList_serie;
    if (watchlist.includes(ID)) {
      setWatchlist(true);
    }
  };

  useEffect(() => {
    checkWatchlist();
  }, []);

  async function deleteWatchlist(id: any) {
    axios
      .patch(
        `http://localhost:5000/api/profile/r_watchlist_serie/${id_profile}`,
        {
          watchList_serie: id,
        }
      )
      .then((res) => {
        setWatchlist(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  //___________________________

  async function pushFavorite(id: any) {
    axios
      .patch(
        `http://localhost:5000/api/profile/favorites_serie/${id_profile}`,
        {
          favorites_serie: id,
        }
      )
      .then((res) => {
        setFavorite(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const checkFavorite = async () => {
    const { data } = await axios.get(
      `http://localhost:5000/api/profile/${id_profile}`
    );
    const favorite = data.favorites_serie;
    if (favorite.includes(ID)) {
      setFavorite(true);
    }
  };

  useEffect(() => {
    checkFavorite();
  }, []);

  async function deleteFavorite(id: any) {
    axios
      .patch(
        `http://localhost:5000/api/profile/r_favorites_serie/${id_profile}`,
        {
          favorites_serie: id,
        }
      )
      .then((res) => {
        setFavorite(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  //___________________________

  async function pushHistoric(id: any) {
    axios
      .patch(`http://localhost:5000/api/profile/historic_serie/${id_profile}`, {
        historic_serie: id,
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <div className="banner">
        <img
          src={`https://image.tmdb.org/t/p/original` + pictures?.file_path}
          alt="poster"
        />
        <div className="options">
          <a
            onClick={() => pushHistoric(movies?.id)}
            className="poster"
            href={`/Player/Serie/${movies?.id}`}
          >
            <i className="fa-solid fa-play"></i>
          </a>
          {watchlist ? (
            <a onClick={() => deleteWatchlist(movies?.id)}>
              <i className="fa-solid fa-eye-slash"></i>
            </a>
          ) : (
            <a onClick={() => pushWatchlist(movies?.id)}>
              <i className="fa-solid fa-eye"></i>
            </a>
          )}
          {favorite ? (
            <a onClick={() => deleteFavorite(movies?.id)}>
              <i className="fa-solid fa-heart-crack"></i>
            </a>
          ) : (
            <a onClick={() => pushFavorite(movies?.id)}>
              <i className="fa-solid fa-heart"></i>
            </a>
          )}
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
