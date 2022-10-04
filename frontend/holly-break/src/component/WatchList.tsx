import React from "react";
import { NavLink } from "react-router-dom";
import Poster from "../img/poster_default.png";
import axios from "axios";
import { useState, useEffect } from "react";

interface userProfiles {
  avatar: string;
  createdAt: string;
  favorites_movie: Array<string>;
  favorites_serie: Array<string>;
  historic_movie: Array<string>;
  historic_serie: Array<string>;
  id_user: string;
  is_young: boolean;
  pin_code: string;
  pseudo: string;
  quote: string;
  updatedAt: string;
  watchList_movie: Array<string>;
  watchList_serie: Array<string>;
  _id: string;
}

const BASEURL = process.env.REACT_APP_API_URL;

function WatchList() {
  const id = localStorage.getItem("profile");

  const API: any = process.env.REACT_APP_API_KEY;
  const API_KEY = API.replace(";", "");

  const [watchList, setWatchList] = React.useState<any>([]);
  const [movies, setMovies] = React.useState<any>([]);

  const [watchListSerie, setWatchListSerie] = React.useState<any>([]);
  const [series, setSeries] = React.useState<any>([]);

  const getProfileWatchlistMovie = async () => {
    axios.get(`${BASEURL}api/profile/${id}`).then((response) => {
      setWatchList(response.data.watchList_movie);
    });
  };

  const getProfileWatchlistSerie = async () => {
    axios.get(`${BASEURL}api/profile/${id}`).then((response) => {
      setWatchListSerie(response.data.watchList_serie);
    });
  };

  React.useEffect(() => {
    getProfileWatchlistMovie();
    getProfileWatchlistSerie();
  }, []);

  const getMovie = async (id: string) => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
      )
      .then((res) => {
        setMovies((movies: any) => [...movies, res.data]);
      });
  };

  React.useEffect(() => {
    for (let i = 0; i < watchList.length; i++) {
      getMovie(watchList[i]);
    }
  }, [watchList]);

  const getSerie = async (id: string) => {
    axios
      .get(
        `https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}&language=en-US`
      )
      .then((res) => {
        setSeries((series: any) => [...series, res.data]);
      });
  };

  React.useEffect(() => {
    for (let i = 0; i < watchListSerie.length; i++) {
      getSerie(watchListSerie[i]);
    }
  }, [watchListSerie]);

  function removeDuplicates(originalArray: any, prop: any) {
    var newArray: any = [];
    var lookupObject: any = {};

    for (var i in originalArray) {
      lookupObject[originalArray[i][prop]] = originalArray[i];
    }

    for (i in lookupObject) {
      newArray.push(lookupObject[i]);
    }

    return newArray;
  }

  const moviesUnique = removeDuplicates(movies, "id");
  const seriesUnique = removeDuplicates(series, "id");

  //---------------------

  const id_profile = localStorage.getItem("profile");
  const [watchlistD, setWatchlistD] = useState(false);
  const [watchlistSD, setWatchlistSD] = useState(false);

  async function deleteWatchlist(id: any) {
    axios
      .patch(`${BASEURL}api/profile/r_watchlist_movie/${id_profile}`, {
        watchList_movie: id,
      })
      .then((res) => {
        setWatchlistD(false);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async function deleteWatchlistSD(id: any) {
    axios
      .patch(`${BASEURL}api/profile/r_watchlist_serie/${id_profile}`, {
        watchList_serie: id,
      })
      .then((res) => {
        setWatchlistSD(false);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  //----------------------

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
      <div className="watchlist_container">
        <div className="Movies_watchList">
          <h1>Movies</h1>
          <div className="container_genre">
            {moviesUnique.map((movie: any) => (
              <div className="container_fave">
                <NavLink className="poster" to={`/Movie/${movie.id}`}>
                  <div id={movie.id} className="movies_container_poster">
                    <img src={GetPictures(movie.poster_path)} alt="poster" />
                  </div>
                </NavLink>
                <a
                  className="delete_Button"
                  onClick={() => deleteWatchlist(movie.id)}
                >
                  <i className="fa-solid fa-eye-slash"></i>
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="Series_watchList">
          <h1>Series</h1>
          <div className="container_genre">
            {seriesUnique.map((serie: any) => (
              <div className="container_fave">
                <NavLink className="poster" to={`/tv/${serie.id}`}>
                  <div id={serie.id} className="movies_container_poster">
                    <img src={GetPictures(serie.poster_path)} alt="poster" />
                  </div>
                </NavLink>
                <a
                  className="delete_Button"
                  onClick={() => deleteWatchlistSD(serie.id)}
                >
                  <i className="fa-solid fa-eye-slash"></i>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default WatchList;
