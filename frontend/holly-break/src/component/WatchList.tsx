import React from "react";
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

function WatchList() {
  const id = localStorage.getItem("profile");

  const API: any = process.env.REACT_APP_API_KEY;
  const API_KEY = API.replace(";", "");

  const [profil, setProfil] = useState<any>([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/profile/${id}`).then((res) => {
      setProfil(res.data);
    });
  }, []);

  const watchMovies: Array<any> = profil?.watchList_movie;

  const [movies, setMovies] = React.useState<any>([]);

  const getMovie = async () => {
    for (let i = 0; i < watchMovies.length; i++) {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${watchMovies[i]}?api_key=${API_KEY}&language=en-US`
        )
        .then((res) => {
          setMovies((movies: any) => [...movies, res.data]);
        });
    }
  };

  React.useEffect(() => {
    getMovie();
  }, []);

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

  console.log(moviesUnique);

  return (
    <>
      <div>
        <h1>Favorites</h1>
        <h2>Movies</h2>
        {movies?.map((item: any) => {
          <div>
            <p>{item.title}</p>
          </div>;
        })}
      </div>
    </>
  );
}

export default WatchList;
