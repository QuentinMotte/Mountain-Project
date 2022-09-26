import React from "react";
import Poster from "../img/poster_default.png";
import { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import Footer from "../component/Footer";
import Header from "../component/Header";
import axios from "axios";
const Slider = require("react-slick").default;

const API: any = process.env.REACT_APP_API_KEY;

const API_KEY = API.replace(";", "");

interface moviesProps {
  map(arg0: (item: any) => JSX.Element): import("react").ReactNode;
  backdrop_path: string;
  poster_path: string;
  id: string;
  overview: string;
  title: string;
  tagline: string;
  name: string;
}

function KidsPage() {
  //---MOVIES
  const URLAnimation = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=16`;
  const UrlFamily = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10751`;

  let [moviesAnimation, setMoviesAnimation] = useState<
    moviesProps | undefined
  >();
  let [moviesFam, setMoviesFam] = useState<moviesProps | undefined>();

  useEffect(() => {
    getMoviesAnimation();
    getMoviesFam();
    getTVFam();
    getTVKid();
    getTVAN();
    getMovie_1();
    getMovie_2();
    getMovie_3();
    getMovie_4();
    getTV_1();
    getTV_2();
  }, []);

  const getMoviesAnimation = async () => {
    const { data } = await axios.get(URLAnimation);
    setMoviesAnimation(data.results);
  };

  const getMoviesFam = async () => {
    const { data } = await axios.get(UrlFamily);
    setMoviesFam(data.results);
  };

  //-------SERIES

  const URLFam = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=10751`;
  const URLKids = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=10762`;
  const URLAN = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=16`;

  let [TVFam, setTVFam] = useState<moviesProps | undefined>();

  let [TVKid, setTVKid] = useState<moviesProps | undefined>();

  let [TVAN, setTVAN] = useState<moviesProps | undefined>();

  const getTVFam = async () => {
    const { data } = await axios.get(URLFam);
    setTVFam(data.results);
  };

  const getTVKid = async () => {
    const { data } = await axios.get(URLKids);
    setTVKid(data.results);
  };

  const getTVAN = async () => {
    const { data } = await axios.get(URLAN);
    setTVAN(data.results);
  };

  //------HEROBANNER

  const Pinocchio = "532639";
  const Hercule = "11970";
  const Encanto = "568124";
  const InsideOut = "150540";

  const SpiderMan = "34391";
  const Code = "4622";

  const url_Pinocchio = `https://api.themoviedb.org/3/movie/${Pinocchio}?api_key=${API_KEY}&language=en-US`;
  const url_Hercules = `https://api.themoviedb.org/3/movie/${Hercule}?api_key=${API_KEY}&language=en-US`;
  const url_Encanto = `https://api.themoviedb.org/3/movie/${Encanto}?api_key=${API_KEY}&language=en-US`;
  const url_InsideOut = `https://api.themoviedb.org/3/movie/${InsideOut}?api_key=${API_KEY}&language=en-US`;

  const url_SpiderMan = `https://api.themoviedb.org/3/tv/${SpiderMan}?api_key=${API_KEY}&language=en-US`;
  const url_Code = `https://api.themoviedb.org/3/tv/${Code}?api_key=${API_KEY}&language=en-US`;

  let [Movie_1, setMovie_1] = useState<moviesProps | undefined>();
  let [Movie_2, setMovie_2] = useState<moviesProps | undefined>();
  let [Movie_3, setMovie_3] = useState<moviesProps | undefined>();
  let [Movie_4, setMovie_4] = useState<moviesProps | undefined>();

  let [TV_1, setTV_1] = useState<moviesProps | undefined>();
  let [TV_2, setTV_2] = useState<moviesProps | undefined>();

  const getMovie_1 = async () => {
    const { data } = await axios.get(url_Pinocchio);
    setMovie_1(data);
  };

  const getMovie_2 = async () => {
    const { data } = await axios.get(url_Hercules);
    setMovie_2(data);
  };

  const getMovie_3 = async () => {
    const { data } = await axios.get(url_Encanto);
    setMovie_3(data);
  };

  const getMovie_4 = async () => {
    const { data } = await axios.get(url_InsideOut);
    setMovie_4(data);
  };

  const getTV_1 = async () => {
    const { data } = await axios.get(url_SpiderMan);
    setTV_1(data);
  };

  const getTV_2 = async () => {
    const { data } = await axios.get(url_Code);
    setTV_2(data);
  };

  //-------------

  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
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

  return (
    <>
      <Header></Header>
      <main className="content-container">
        <div className="container_herobanner">
          <Slider {...settings} className="herobanner">
            <div className="movies_popular">
              <img
                src={
                  `https://image.tmdb.org/t/p/original` + Movie_1?.backdrop_path
                }
                alt="poster"
              />

              <div className="title">
                <NavLink className="poster" to={`/Movie/${Movie_1?.id}`}>
                  <p className="title_opacity">{Movie_1?.title}</p>
                </NavLink>
              </div>
            </div>

            <div className="movies_popular">
              <img
                src={
                  `https://image.tmdb.org/t/p/original` + Movie_2?.backdrop_path
                }
                alt="poster"
              />

              <div className="title">
                <NavLink className="poster" to={`/Movie/${Movie_2?.id}`}>
                  <p className="title_opacity">{Movie_2?.title}</p>
                </NavLink>
              </div>
            </div>

            <div className="movies_popular">
              <img
                src={
                  `https://image.tmdb.org/t/p/original` + Movie_3?.backdrop_path
                }
                alt="poster"
              />

              <div className="title">
                <NavLink className="poster" to={`/Movie/${Movie_3?.id}`}>
                  <p className="title_opacity">{Movie_3?.title}</p>
                </NavLink>
              </div>
            </div>

            <div className="movies_popular">
              <img
                src={
                  `https://image.tmdb.org/t/p/original` + Movie_4?.backdrop_path
                }
                alt="poster"
              />

              <div className="title">
                <NavLink className="poster" to={`/Movie/${Movie_4?.id}`}>
                  <p className="title_opacity">{Movie_4?.title}</p>
                </NavLink>
              </div>
            </div>

            <div className="movies_popular">
              <img
                src={
                  `https://image.tmdb.org/t/p/original` + TV_1?.backdrop_path
                }
                alt="poster"
              />

              <div className="title">
                <NavLink className="poster" to={`/tv/${TV_1?.id}`}>
                  <p className="title_opacity">{TV_1?.name}</p>
                </NavLink>
              </div>
            </div>

            <div className="movies_popular">
              <img
                src={
                  `https://image.tmdb.org/t/p/original` + TV_2?.backdrop_path
                }
                alt="poster"
              />

              <div className="title">
                <NavLink className="poster" to={`/tv/${TV_2?.id}`}>
                  <p className="title_opacity">{TV_2?.name}</p>
                </NavLink>
              </div>
            </div>
          </Slider>
        </div>

        <br />
        <br />

        <h1>Movies</h1>
        <div className="container_loop_movies">
          <NavLink className="genre" to={`/Movie/Genre/16`}>
            <h3>Animation</h3>
            <i className="fa-solid fa-arrow-right"></i>
          </NavLink>
          <Slider {...settings2} className="poster_movies">
            {moviesAnimation?.map((movieAnimation) => (
              <NavLink className="poster" to={`/Movie/${movieAnimation.id}`}>
                <div id={movieAnimation.id} className="movies_container_poster">
                  <img
                    src={GetPictures(movieAnimation.poster_path)}
                    alt="poster"
                  />
                </div>
              </NavLink>
            ))}
          </Slider>
        </div>

        <div className="container_loop_movies">
          <NavLink className="genre" to={`/Movie/Genre/10751`}>
            <h3>Family</h3>
            <i className="fa-solid fa-arrow-right"></i>
          </NavLink>
          <Slider {...settings2} className="poster_movies">
            {moviesFam?.map((movieFam) => (
              <NavLink className="poster" to={`/Movie/${movieFam.id}`}>
                <div id={movieFam.id} className="movies_container_poster">
                  <img src={GetPictures(movieFam.poster_path)} alt="poster" />
                </div>
              </NavLink>
            ))}
          </Slider>
        </div>
        <br />
        <h1>Series</h1>
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
          <NavLink className="genre" to={`/Serie/Genre/16`}>
            <h3>Animation</h3>
            <i className="fa-solid fa-arrow-right"></i>
          </NavLink>
          <Slider {...settings2} className="poster_movies">
            {TVAN?.map((TVKidAN) => (
              <NavLink className="poster" to={`/tv/${TVKidAN.id}`}>
                <div id={TVKidAN.id} className="movies_container_poster">
                  <img src={GetPictures(TVKidAN.poster_path)} alt="poster" />
                </div>
              </NavLink>
            ))}
          </Slider>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}

export default KidsPage;
