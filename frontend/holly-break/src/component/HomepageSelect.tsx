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

  let [TV_1, setTV_1] = useState<SeriesProps | undefined>();
  let [TV_2, setTV_2] = useState<SeriesProps | undefined>();
  let [TV_3, setTV_3] = useState<SeriesProps | undefined>();
  let [TV_4, setTV_4] = useState<SeriesProps | undefined>();

  let [Movie_1, setMovie_1] = useState<moviesProps | undefined>();
  let [Movie_2, setMovie_2] = useState<moviesProps | undefined>();
  let [Movie_3, setMovie_3] = useState<moviesProps | undefined>();
  let [Movie_4, setMovie_4] = useState<moviesProps | undefined>();

  useEffect(() => {
    getTV_1();
    getTV_2();
    getTV_3();
    getTV_4();
    getMovie_1();
    getMovie_2();
    getMovie_3();
    getMovie_4();
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

  return (
    <>
      <div>
        <h1>Suggestions</h1>
      </div>
    </>
  );
}

export default HomepageSelect;
