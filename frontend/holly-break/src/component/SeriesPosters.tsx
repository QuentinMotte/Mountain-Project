import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const img = `https://image.tmdb.org/t/p/w300`;

interface moviesProps {
  map(arg0: (item: any) => JSX.Element): import("react").ReactNode;
  id: number;
  overview: string;
  poster_path: string;
  name: string;
  backdrop_path: string;
}

export function SeriesPosters() {
  const URLHB =
    "https://api.themoviedb.org/3/discover/tv?api_key=a378b12e0a9383634a503a8f29d43915&language=en-US&sort_by=popularity.desc";

  const URLDRAMA =
    "https://api.themoviedb.org/3/discover/tv?api_key=a378b12e0a9383634a503a8f29d43915&language=en-US&sort_by=popularity.desc&with_genres=18";

  const URLCrime =
    "https://api.themoviedb.org/3/discover/tv?api_key=a378b12e0a9383634a503a8f29d43915&language=en-US&sort_by=popularity.desc&with_genres=80";

  const URLMystery =
    "https://api.themoviedb.org/3/discover/tv?api_key=a378b12e0a9383634a503a8f29d43915&language=en-US&sort_by=popularity.desc&with_genres=9648";

  const URLComedy =
    "https://api.themoviedb.org/3/discover/tv?api_key=a378b12e0a9383634a503a8f29d43915&language=en-US&sort_by=popularity.desc&with_genres=35";

  const URLFantansy =
    "https://api.themoviedb.org/3/discover/tv?api_key=a378b12e0a9383634a503a8f29d43915&language=en-US&sort_by=popularity.desc&with_genres=10765";

  let [TVTrend, setTVTrend] = useState<moviesProps | undefined>();

  let [TVDrama, setTVDrama] = useState<moviesProps | undefined>();

  let [TVCrime, setTVCrime] = useState<moviesProps | undefined>();

  let [TVMystery, setTVMystery] = useState<moviesProps | undefined>();

  let [TVComedy, setTVComedy] = useState<moviesProps | undefined>();

  let [TVFantasy, setTVFantasy] = useState<moviesProps | undefined>();

  useEffect(() => {
    getTVShow();
    getTVDrama();
    getTVCrime();
    getTVMystery();
    getTVComedy();
    getTVFantasy();
  }, []);

  const getTVShow = async () => {
    const { data } = await axios.get(URLHB);
    setTVTrend(data.results);
  };

  const getTVDrama = async () => {
    const { data } = await axios.get(URLDRAMA);
    setTVDrama(data.results);
  };

  const getTVCrime = async () => {
    const { data } = await axios.get(URLCrime);
    setTVCrime(data.results);
  };

  const getTVMystery = async () => {
    const { data } = await axios.get(URLMystery);
    setTVMystery(data.results);
  };

  const getTVComedy = async () => {
    const { data } = await axios.get(URLComedy);
    setTVComedy(data.results);
  };

  const getTVFantasy = async () => {
    const { data } = await axios.get(URLFantansy);
    setTVFantasy(data.results);
  };
  return (
    <>
      <h1>Series</h1>
      <div className="container_herobanner">
        <i className="fa-solid fa-arrow-left"></i>
        <div className="herobanner">
          {TVTrend?.map((tvshow) => (
            <div id={tvshow.id} className="movies_popular">
              <img
                src={`https://image.tmdb.org/t/p/w300` + tvshow.backdrop_path}
                alt="poster"
              />
              <div className="title">
                <p className="title_opacity">{tvshow.name}</p>
              </div>
            </div>
          ))}
        </div>
        <i className="fa-solid fa-arrow-right"></i>
      </div>

      <div className="container_loop_movies">
        <div className="genre">
          <h3>Drama</h3>
          <i className="fa-solid fa-arrow-right"></i>
        </div>
        <div className="poster_movies">
          {TVDrama?.map((TVDrama) => (
            <div id={TVDrama.id} className="movies_container_poster">
              <img
                src={`https://image.tmdb.org/t/p/w300` + TVDrama.poster_path}
                alt="poster"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="container_loop_movies">
        <div className="genre">
          <h3>Crime</h3>
          <i className="fa-solid fa-arrow-right"></i>
        </div>
        <div className="poster_movies">
          {TVCrime?.map((TVCrime) => (
            <div id={TVCrime.id} className="movies_container_poster">
              <img
                src={`https://image.tmdb.org/t/p/w300` + TVCrime.poster_path}
                alt="poster"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="container_loop_movies">
        <div className="genre">
          <h3>Mystery</h3>
          <i className="fa-solid fa-arrow-right"></i>
        </div>
        <div className="poster_movies">
          {TVMystery?.map((TVMystery) => (
            <div id={TVMystery.id} className="movies_container_poster">
              <img
                src={`https://image.tmdb.org/t/p/w300` + TVMystery.poster_path}
                alt="poster"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="container_loop_movies">
        <div className="genre">
          <h3>Comedy</h3>
          <i className="fa-solid fa-arrow-right"></i>
        </div>
        <div className="poster_movies">
          {TVComedy?.map((TVComedy) => (
            <div id={TVComedy.id} className="movies_container_poster">
              <img
                src={`https://image.tmdb.org/t/p/w300` + TVComedy.poster_path}
                alt="poster"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="container_loop_movies">
        <div className="genre">
          <h3>Sci-Fi & Fantasy</h3>
          <i className="fa-solid fa-arrow-right"></i>
        </div>
        <div className="poster_movies">
          {TVFantasy?.map((TVFantasy) => (
            <div id={TVFantasy.id} className="movies_container_poster">
              <img
                src={`https://image.tmdb.org/t/p/w300` + TVFantasy.poster_path}
                alt="poster"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
