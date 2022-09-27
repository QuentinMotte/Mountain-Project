import React from "react";
import { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";
const Slider = require("react-slick").default;

const API: any = process.env.REACT_APP_API_KEY;

const API_KEY = API.replace(";", "");

interface SeriesProps {
  map(arg0: (item: any) => JSX.Element): import("react").ReactNode;
  backdrop_path: string;
  poster_path: string;
  id: string;
  overview: string;
  name: string;
  tagline: string;
}

interface moviesProps {
  map(arg0: (item: any) => JSX.Element): import("react").ReactNode;
  backdrop_path: string;
  poster_path: string;
  id: string;
  overview: string;
  title: string;
  tagline: string;
}

function HomepageSelect() {
  const ID_Outlander = "56570";
  const ID_The_Office = "2316";
  const ID_GLee = "1417";
  const ID_HIMYM = "1100";

  const ID_Belfast = "777270";
  const ID_LOTR = "122";
  const ID_BJ = "634";
  const ID_HT = "82693";

  const URL_Outlander = `https://api.themoviedb.org/3/tv/${ID_Outlander}?api_key=${API_KEY}&language=en-US`;
  const URL_The_Office = `https://api.themoviedb.org/3/tv/${ID_The_Office}?api_key=${API_KEY}&language=en-US`;
  const URL_Glee = `https://api.themoviedb.org/3/tv/${ID_GLee}?api_key=${API_KEY}&language=en-US`;
  const URL_HIMYM = `https://api.themoviedb.org/3/tv/${ID_HIMYM}?api_key=${API_KEY}&language=en-US`;

  const URL_Belfast = `https://api.themoviedb.org/3/movie/${ID_Belfast}?api_key=${API_KEY}&language=en-US`;
  const URL_LOTR = `https://api.themoviedb.org/3/movie/${ID_LOTR}?api_key=${API_KEY}&language=en-US`;
  const URL_BJ = `https://api.themoviedb.org/3/movie/${ID_BJ}?api_key=${API_KEY}&language=en-US`;
  const URL_HT = `https://api.themoviedb.org/3/movie/${ID_HT}?api_key=${API_KEY}&language=en-US`;

  const URLHB = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false`;
  const URLHBTV = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false`;
  const URLTrendtoday = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&include_adult=false`;
  const URLTrendtodayTV = `https://api.themoviedb.org/3/trending/tv/day?api_key=${API_KEY}&include_adult=false`;

  let [TV_1, setTV_1] = useState<SeriesProps | undefined>();
  let [TV_2, setTV_2] = useState<SeriesProps | undefined>();
  let [TV_3, setTV_3] = useState<SeriesProps | undefined>();
  let [TV_4, setTV_4] = useState<SeriesProps | undefined>();

  let [Movie_1, setMovie_1] = useState<moviesProps | undefined>();
  let [Movie_2, setMovie_2] = useState<moviesProps | undefined>();
  let [Movie_3, setMovie_3] = useState<moviesProps | undefined>();
  let [Movie_4, setMovie_4] = useState<moviesProps | undefined>();

  let [moviesTrend, setMoviesTrend] = useState<moviesProps | undefined>();
  let [seriesTrend, setSeriesTrend] = useState<SeriesProps | undefined>();
  let [TrendToday, setTrendToday] = useState<SeriesProps | undefined>();
  let [TrendTodayTV, setTrendTodayTV] = useState<SeriesProps | undefined>();

  useEffect(() => {
    getTV_1();
    getTV_2();
    getTV_3();
    getTV_4();
    getMovie_1();
    getMovie_2();
    getMovie_3();
    getMovie_4();
    getMovies();
    getSeries();
    getTrend();
    getTrendTV();
  }, []);

  const getTV_1 = async () => {
    const { data } = await axios.get(URL_Outlander);
    setTV_1(data);
  };

  const getTV_2 = async () => {
    const { data } = await axios.get(URL_The_Office);
    setTV_2(data);
  };

  const getTV_3 = async () => {
    const { data } = await axios.get(URL_Glee);
    setTV_3(data);
  };

  const getTV_4 = async () => {
    const { data } = await axios.get(URL_HIMYM);
    setTV_4(data);
  };

  const getMovie_1 = async () => {
    const { data } = await axios.get(URL_Belfast);
    setMovie_1(data);
  };

  const getMovie_2 = async () => {
    const { data } = await axios.get(URL_LOTR);
    setMovie_2(data);
  };

  const getMovie_3 = async () => {
    const { data } = await axios.get(URL_BJ);
    setMovie_3(data);
  };

  const getMovie_4 = async () => {
    const { data } = await axios.get(URL_HT);
    setMovie_4(data);
  };

  const getMovies = async () => {
    const { data } = await axios.get(URLHB);
    setMoviesTrend(data.results);
  };

  const getSeries = async () => {
    const { data } = await axios.get(URLHBTV);
    setSeriesTrend(data.results);
  };

  const getTrend = async () => {
    const { data } = await axios.get(URLTrendtoday);
    setTrendToday(data.results);
  };

  const getTrendTV = async () => {
    const { data } = await axios.get(URLTrendtodayTV);
    setTrendTodayTV(data.results);
  };

  //----------------------

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

  //----------------

  return (
    <>
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
              src={`https://image.tmdb.org/t/p/original` + TV_1?.backdrop_path}
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
              src={`https://image.tmdb.org/t/p/original` + TV_2?.backdrop_path}
              alt="poster"
            />

            <div className="title">
              <NavLink className="poster" to={`/tv/${TV_2?.id}`}>
                <p className="title_opacity">{TV_2?.name}</p>
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
              src={`https://image.tmdb.org/t/p/original` + TV_3?.backdrop_path}
              alt="poster"
            />

            <div className="title">
              <NavLink className="poster" to={`/tv/${TV_3?.id}`}>
                <p className="title_opacity">{TV_3?.name}</p>
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
              src={`https://image.tmdb.org/t/p/original` + TV_4?.backdrop_path}
              alt="poster"
            />

            <div className="title">
              <NavLink className="poster" to={`/tv/${TV_4?.id}`}>
                <p className="title_opacity">{TV_4?.name}</p>
              </NavLink>
            </div>
          </div>
        </Slider>
      </div>

      <br />

      <div className="container_loop_movies_Home">
        <NavLink className="genre" to={`/Popular/movie`}>
          <h3>Popular Movies</h3>
          <i className="fa-solid fa-arrow-right"></i>
        </NavLink>
        <Slider {...settings2} className="poster_movies">
          {moviesTrend?.map((movie) => (
            <NavLink className="poster" to={`/Movie/${movie.id}`}>
              <div id={movie.id} className="movies_container_poster">
                <img
                  src={`https://image.tmdb.org/t/p/w500` + movie.backdrop_path}
                  alt="poster"
                />
              </div>
            </NavLink>
          ))}
        </Slider>
      </div>

      <div className="container_loop_movies">
        <h3>Trending Today</h3>

        <Slider {...settings2} className="poster_movies">
          {TrendToday?.map((movieTrend) => (
            <NavLink className="poster" to={`/Movie/${movieTrend.id}`}>
              <div id={movieTrend.id} className="movies_container_poster">
                <img
                  src={
                    `https://image.tmdb.org/t/p/w500` + movieTrend.poster_path
                  }
                  alt="poster"
                />
              </div>
            </NavLink>
          ))}
        </Slider>
      </div>

      <div className="container_loop_movies_Home">
        <NavLink className="genre" to={`/Popular/tv`}>
          <h3>Popular Series</h3>
          <i className="fa-solid fa-arrow-right"></i>
        </NavLink>
        <Slider {...settings2} className="poster_movies">
          {seriesTrend?.map((serie) => (
            <NavLink className="poster" to={`/tv/${serie.id}`}>
              <div id={serie.id} className="movies_container_poster">
                <img
                  src={`https://image.tmdb.org/t/p/w500` + serie.backdrop_path}
                  alt="poster"
                />
              </div>
            </NavLink>
          ))}
        </Slider>
      </div>

      <div className="container_loop_movies">
        <h3>Trending Today</h3>

        <Slider {...settings2} className="poster_movies">
          {TrendTodayTV?.map((TVTrend) => (
            <NavLink className="poster" to={`/tv/${TVTrend.id}`}>
              <div id={TVTrend.id} className="movies_container_poster">
                <img
                  src={`https://image.tmdb.org/t/p/w500` + TVTrend.poster_path}
                  alt="poster"
                />
              </div>
            </NavLink>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default HomepageSelect;
