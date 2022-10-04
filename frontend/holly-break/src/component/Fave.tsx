import React from "react";
import { NavLink } from "react-router-dom";
import Poster from "../img/poster_default.png";
import axios from "axios";
import { useState, useEffect } from "react";

function Fave() {
  const id = localStorage.getItem("profile");

  const API: any = process.env.REACT_APP_API_KEY;
  const API_KEY = API.replace(";", "");

  const [watchList, setWatchList] = React.useState<any>([]);
  const [movies, setMovies] = React.useState<any>([]);

  const [watchListSerie, setWatchListSerie] = React.useState<any>([]);
  const [series, setSeries] = React.useState<any>([]);

  const BASEURL = process.env.REACT_APP_API_URL;

  const getProfileWatchlistMovie = async () => {
    axios.get(`${BASEURL}api/profile/${id}`).then((response) => {
      setWatchList(response.data.favorites_movie);
    });
  };

  const getProfileWatchlistSerie = async () => {
    axios.get(`${BASEURL}api/profile/${id}`).then((response) => {
      setWatchListSerie(response.data.favorites_serie);
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
  const [favorite, setFavorite] = useState(false);
  const [favoriteM, setFavoriteM] = useState(false);

  async function deleteFavorite(id: any) {
    axios
      .patch(`${BASEURL}api/profile/r_favorites_serie/${id_profile}`, {
        favorites_serie: id,
      })
      .then((res) => {
        setFavorite(false);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async function deleteFavoriteM(id: any) {
    axios
      .patch(`${BASEURL}api/profile/r_favorites_movie/${id_profile}`, {
        favorites_movie: id,
      })
      .then((res) => {
        setFavoriteM(false);
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
                onClick={() => deleteFavoriteM(movie?.id)}
              >
                <i className="fa-solid fa-heart-crack"></i>
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
                onClick={() => deleteFavorite(serie?.id)}
              >
                <i className="fa-solid fa-heart-crack"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Fave;
