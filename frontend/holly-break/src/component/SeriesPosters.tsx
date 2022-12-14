import React from "react";
import Poster from "../img/poster_default.png";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
const Slider = require("react-slick").default;

const API: any = process.env.REACT_APP_API_KEY;

const API_KEY = API.replace(";", "");

interface moviesProps {
  map(arg0: (item: any) => JSX.Element): import("react").ReactNode;
  id: number;
  overview: string;
  poster_path: string;
  name: string;
  backdrop_path: string;
}

export function SeriesPosters() {
  const URLHB = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc`;

  const URLDRAMA = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=18`;

  const URLCrime = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=80`;

  const URLMystery = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=9648`;

  const URLComedy = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=35`;

  const URLFantansy = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=10765`;

  const URLWar = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=10768`;

  const URLAction = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=10759`;

  const URLWestern = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=37`;

  const URLSoap = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=10766`;

  const URLFam = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=10751`;

  const URLKids = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=10762`;

  const URLDoc = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=99`;

  const URLTalk = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=10767`;

  const URLNews = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=10763`;

  const URLReality = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=10764`;

  let [TVTrend, setTVTrend] = useState<moviesProps | undefined>();

  let [TVDrama, setTVDrama] = useState<moviesProps | undefined>();

  let [TVCrime, setTVCrime] = useState<moviesProps | undefined>();

  let [TVMystery, setTVMystery] = useState<moviesProps | undefined>();

  let [TVComedy, setTVComedy] = useState<moviesProps | undefined>();

  let [TVFantasy, setTVFantasy] = useState<moviesProps | undefined>();

  let [TVWar, setTVWar] = useState<moviesProps | undefined>();

  let [TVAction, setTVAction] = useState<moviesProps | undefined>();

  let [TVWestern, setTVWestern] = useState<moviesProps | undefined>();

  let [TVSoap, setTVSoap] = useState<moviesProps | undefined>();

  let [TVFam, setTVFam] = useState<moviesProps | undefined>();

  let [TVKid, setTVKid] = useState<moviesProps | undefined>();

  let [TVDoc, setTVDoc] = useState<moviesProps | undefined>();

  let [TVTalk, setTVTalk] = useState<moviesProps | undefined>();

  let [TVNews, setTVNews] = useState<moviesProps | undefined>();

  let [TVReality, setTVReality] = useState<moviesProps | undefined>();

  useEffect(() => {
    getTVShow();
    getTVDrama();
    getTVCrime();
    getTVMystery();
    getTVComedy();
    getTVFantasy();
    getTVWar();
    getTVAction();
    getTVWestern();
    getTVSoap();
    getTVFam();
    getTVKid();
    getTVDoc();
    getTVTalk();
    getTVNews();
    getTVReality();
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

  const getTVWar = async () => {
    const { data } = await axios.get(URLWar);
    setTVWar(data.results);
  };

  const getTVAction = async () => {
    const { data } = await axios.get(URLAction);
    setTVAction(data.results);
  };

  const getTVWestern = async () => {
    const { data } = await axios.get(URLWestern);
    setTVWestern(data.results);
  };

  const getTVSoap = async () => {
    const { data } = await axios.get(URLSoap);
    setTVSoap(data.results);
  };

  const getTVFam = async () => {
    const { data } = await axios.get(URLFam);
    setTVFam(data.results);
  };

  const getTVKid = async () => {
    const { data } = await axios.get(URLKids);
    setTVKid(data.results);
  };

  const getTVDoc = async () => {
    const { data } = await axios.get(URLDoc);
    setTVDoc(data.results);
  };

  const getTVTalk = async () => {
    const { data } = await axios.get(URLTalk);
    setTVTalk(data.results);
  };

  const getTVNews = async () => {
    const { data } = await axios.get(URLNews);
    setTVNews(data.results);
  };

  const getTVReality = async () => {
    const { data } = await axios.get(URLReality);
    setTVReality(data.results);
  };

  //-------

  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "-20px",
    slidesToShow: 1,
    swipeToSlide: true,
    afterChange: function (index: any) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
  };

  const settings2 = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 7,
    swipeToSlide: true,

    responsive: [
      {
        breakpoint: 1650,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],

    afterChange: function (index: any) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
  };

  function GetPictures(avatar: string) {
    switch (avatar) {
      case null:
        return Poster;
      case avatar:
        return `https://image.tmdb.org/t/p/w500` + avatar;
    }
  }

  //------
  return (
    <>
      <h1>Series</h1>
      <div className="container_herobanner">
        <Slider {...settings} className="herobanner">
          {TVTrend?.map((tvshow) => (
            <div id={tvshow.id} className="movies_popular">
              <img
                src={
                  `https://image.tmdb.org/t/p/original` + tvshow.backdrop_path
                }
                alt="poster"
              />
              <div className="title">
                <NavLink className="poster" to={`/tv/${tvshow.id}`}>
                  <p className="title_opacity">{tvshow.name}</p>
                </NavLink>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="container_loop_movies">
        <NavLink className="genre" to={`/Serie/Genre/18`}>
          <h3>Drama</h3>
          <i className="fa-solid fa-arrow-right"></i>
        </NavLink>
        <Slider {...settings2} className="poster_movies">
          {TVDrama?.map((TVDrama) => (
            <NavLink className="poster" to={`/tv/${TVDrama.id}`}>
              <div id={TVDrama.id} className="movies_container_poster">
                <img src={GetPictures(TVDrama.poster_path)} alt="poster" />
              </div>
            </NavLink>
          ))}
        </Slider>
      </div>

      <div className="container_loop_movies">
        <NavLink className="genre" to={`/Serie/Genre/80`}>
          <h3>Crime</h3>
          <i className="fa-solid fa-arrow-right"></i>
        </NavLink>
        <Slider {...settings2} className="poster_movies">
          {TVCrime?.map((TVCrime) => (
            <NavLink className="poster" to={`/tv/${TVCrime.id}`}>
              <div id={TVCrime.id} className="movies_container_poster">
                <img src={GetPictures(TVCrime.poster_path)} alt="poster" />
              </div>
            </NavLink>
          ))}
        </Slider>
      </div>

      <div className="container_loop_movies">
        <NavLink className="genre" to={`/Serie/Genre/9648`}>
          <h3>Mystery</h3>
          <i className="fa-solid fa-arrow-right"></i>
        </NavLink>
        <Slider {...settings2} className="poster_movies">
          {TVMystery?.map((TVMystery) => (
            <NavLink className="poster" to={`/tv/${TVMystery.id}`}>
              <div id={TVMystery.id} className="movies_container_poster">
                <img src={GetPictures(TVMystery.poster_path)} alt="poster" />
              </div>
            </NavLink>
          ))}
        </Slider>
      </div>

      <div className="container_loop_movies">
        <NavLink className="genre" to={`/Serie/Genre/35`}>
          <h3>Comedy</h3>
          <i className="fa-solid fa-arrow-right"></i>
        </NavLink>
        <Slider {...settings2} className="poster_movies">
          {TVComedy?.map((TVComedy) => (
            <NavLink className="poster" to={`/tv/${TVComedy.id}`}>
              <div id={TVComedy.id} className="movies_container_poster">
                <img src={GetPictures(TVComedy.poster_path)} alt="poster" />
              </div>
            </NavLink>
          ))}
        </Slider>
      </div>

      <div className="container_loop_movies">
        <NavLink className="genre" to={`/Serie/Genre/10765`}>
          <h3>Sci-Fi & Fantasy</h3>
          <i className="fa-solid fa-arrow-right"></i>
        </NavLink>
        <Slider {...settings2} className="poster_movies">
          {TVFantasy?.map((TVFantasy) => (
            <NavLink className="poster" to={`/tv/${TVFantasy.id}`}>
              <div id={TVFantasy.id} className="movies_container_poster">
                <img src={GetPictures(TVFantasy.poster_path)} alt="poster" />
              </div>
            </NavLink>
          ))}
        </Slider>
      </div>

      <div className="container_loop_movies">
        <NavLink className="genre" to={`/Serie/Genre/10768`}>
          <h3>War & Politics</h3>
          <i className="fa-solid fa-arrow-right"></i>
        </NavLink>
        <Slider {...settings2} className="poster_movies">
          {TVWar?.map((TVWar) => (
            <NavLink className="poster" to={`/tv/${TVWar.id}`}>
              <div id={TVWar.id} className="movies_container_poster">
                <img src={GetPictures(TVWar.poster_path)} alt="poster" />
              </div>
            </NavLink>
          ))}
        </Slider>
      </div>

      <div className="container_loop_movies">
        <NavLink className="genre" to={`/Serie/Genre/10759`}>
          <h3>Action & Adventure</h3>
          <i className="fa-solid fa-arrow-right"></i>
        </NavLink>
        <Slider {...settings2} className="poster_movies">
          {TVAction?.map((TVAction) => (
            <NavLink className="poster" to={`/tv/${TVAction.id}`}>
              <div id={TVAction.id} className="movies_container_poster">
                <img src={GetPictures(TVAction.poster_path)} alt="poster" />
              </div>
            </NavLink>
          ))}
        </Slider>
      </div>

      <div className="container_loop_movies">
        <NavLink className="genre" to={`/Serie/Genre/37`}>
          <h3>Western</h3>
          <i className="fa-solid fa-arrow-right"></i>
        </NavLink>
        <Slider {...settings2} className="poster_movies">
          {TVWestern?.map((TVWestern) => (
            <NavLink className="poster" to={`/tv/${TVWestern.id}`}>
              <div id={TVWestern.id} className="movies_container_poster">
                <img src={GetPictures(TVWestern.poster_path)} alt="poster" />
              </div>
            </NavLink>
          ))}
        </Slider>
      </div>

      <div className="container_loop_movies">
        <NavLink className="genre" to={`/Serie/Genre/10766`}>
          <h3>Soap</h3>
          <i className="fa-solid fa-arrow-right"></i>
        </NavLink>
        <Slider {...settings2} className="poster_movies">
          {TVSoap?.map((TVSoap) => (
            <NavLink className="poster" to={`/tv/${TVSoap.id}`}>
              <div id={TVSoap.id} className="movies_container_poster">
                <img src={GetPictures(TVSoap.poster_path)} alt="poster" />
              </div>
            </NavLink>
          ))}
        </Slider>
      </div>

      <div className="container_loop_movies">
        <NavLink className="genre" to={`/Serie/Genre/10751`}>
          <h3>Family</h3>
          <i className="fa-solid fa-arrow-right"></i>
        </NavLink>
        <Slider {...settings2} className="poster_movies">
          {TVFam?.map((TVFam) => (
            <NavLink className="poster" to={`/tv/${TVFam.id}`}>
              <div id={TVFam.id} className="movies_container_poster">
                <img src={GetPictures(TVFam.poster_path)} alt="poster" />
              </div>
            </NavLink>
          ))}
        </Slider>
      </div>

      <div className="container_loop_movies">
        <NavLink className="genre" to={`/Serie/Genre/10762`}>
          <h3>Kids</h3>
          <i className="fa-solid fa-arrow-right"></i>
        </NavLink>
        <Slider {...settings2} className="poster_movies">
          {TVKid?.map((TVKid) => (
            <NavLink className="poster" to={`/tv/${TVKid.id}`}>
              <div id={TVKid.id} className="movies_container_poster">
                <img src={GetPictures(TVKid.poster_path)} alt="poster" />
              </div>
            </NavLink>
          ))}
        </Slider>
      </div>

      <div className="container_loop_movies">
        <NavLink className="genre" to={`/Serie/Genre/99`}>
          <h3>Documentary</h3>
          <i className="fa-solid fa-arrow-right"></i>
        </NavLink>
        <Slider {...settings2} className="poster_movies">
          {TVDoc?.map((TVDoc) => (
            <NavLink className="poster" to={`/tv/${TVDoc.id}`}>
              <div id={TVDoc.id} className="movies_container_poster">
                <img src={GetPictures(TVDoc.poster_path)} alt="poster" />
              </div>
            </NavLink>
          ))}
        </Slider>
      </div>

      <div className="container_loop_movies">
        <NavLink className="genre" to={`/Serie/Genre/10767`}>
          <h3>Talk</h3>
          <i className="fa-solid fa-arrow-right"></i>
        </NavLink>
        <Slider {...settings2} className="poster_movies">
          {TVTalk?.map((TVTalk) => (
            <NavLink className="poster" to={`/tv/${TVTalk.id}`}>
              <div id={TVTalk.id} className="movies_container_poster">
                <img src={GetPictures(TVTalk.poster_path)} alt="poster" />
              </div>
            </NavLink>
          ))}
        </Slider>
      </div>

      <div className="container_loop_movies">
        <NavLink className="genre" to={`/Serie/Genre/10763`}>
          <h3>News</h3>
          <i className="fa-solid fa-arrow-right"></i>
        </NavLink>
        <Slider {...settings2} className="poster_movies">
          {TVNews?.map((TVNews) => (
            <NavLink className="poster" to={`/tv/${TVNews.id}`}>
              <div id={TVNews.id} className="movies_container_poster">
                <img src={GetPictures(TVNews.poster_path)} alt="poster" />
              </div>
            </NavLink>
          ))}
        </Slider>
      </div>

      <div className="container_loop_movies">
        <NavLink className="genre" to={`/Serie/Genre/10764`}>
          <h3>Reality</h3>
          <i className="fa-solid fa-arrow-right"></i>
        </NavLink>
        <Slider {...settings2} className="poster_movies">
          {TVReality?.map((TVReality) => (
            <NavLink className="poster" to={`/tv/${TVReality.id}`}>
              <div id={TVReality.id} className="movies_container_poster">
                <img src={GetPictures(TVReality.poster_path)} alt="poster" />
              </div>
            </NavLink>
          ))}
        </Slider>
      </div>
    </>
  );
}
