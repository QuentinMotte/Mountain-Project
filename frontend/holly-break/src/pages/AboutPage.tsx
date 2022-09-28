import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import Footer from "../component/Footer";
import Header from "../component/Header";

import avatarAbout_1 from "../img/about/icon_profil_about_1.png";
import avatarAbout_2 from "../img/about/icon_profil_about_1.png";
import avatarAbout_3 from "../img/about/icon_profil_about_1.png";
import avatarAbout_4 from "../img/about/icon_profil_about_1.png";

import logo_TMDB from "../img/about/logoTMDB.svg";

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
}

interface SeriesProps {
  map(arg0: (item: any) => JSX.Element): import("react").ReactNode;
  backdrop_path: string;
  poster_path: string;
  id: string;
  overview: string;
  name: string;
  tagline: string;
}

function AboutPage() {
  const ID_Belfast = "777270";
  const ID_LOTR = "122";
  const ID_BJ = "634";
  const ID_HT = "82693";

  const ID_Outlander = "56570";
  const ID_The_Office = "2316";
  const ID_GLee = "1417";
  const ID_HIMYM = "1100";

  const URL_Belfast = `https://api.themoviedb.org/3/movie/${ID_Belfast}?api_key=${API_KEY}&language=en-US`;
  const URL_LOTR = `https://api.themoviedb.org/3/movie/${ID_LOTR}?api_key=${API_KEY}&language=en-US`;
  const URL_BJ = `https://api.themoviedb.org/3/movie/${ID_BJ}?api_key=${API_KEY}&language=en-US`;
  const URL_HT = `https://api.themoviedb.org/3/movie/${ID_HT}?api_key=${API_KEY}&language=en-US`;

  const URL_Outlander = `https://api.themoviedb.org/3/tv/${ID_Outlander}?api_key=${API_KEY}&language=en-US`;
  const URL_The_Office = `https://api.themoviedb.org/3/tv/${ID_The_Office}?api_key=${API_KEY}&language=en-US`;
  const URL_Glee = `https://api.themoviedb.org/3/tv/${ID_GLee}?api_key=${API_KEY}&language=en-US`;
  const URL_HIMYM = `https://api.themoviedb.org/3/tv/${ID_HIMYM}?api_key=${API_KEY}&language=en-US`;

  let [Movie_1, setMovie_1] = useState<moviesProps | undefined>();
  let [Movie_2, setMovie_2] = useState<moviesProps | undefined>();
  let [Movie_3, setMovie_3] = useState<moviesProps | undefined>();
  let [Movie_4, setMovie_4] = useState<moviesProps | undefined>();

  let [TV_1, setTV_1] = useState<SeriesProps | undefined>();
  let [TV_2, setTV_2] = useState<SeriesProps | undefined>();
  let [TV_3, setTV_3] = useState<SeriesProps | undefined>();
  let [TV_4, setTV_4] = useState<SeriesProps | undefined>();

  useEffect(() => {
    getMovie_1();
    getMovie_2();
    getMovie_3();
    getMovie_4();
    getTV_1();
    getTV_2();
    getTV_3();
    getTV_4();
  }, []);

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

  return (
    <>
      <Header></Header>
      <main className="content-container">
        <h1>About us</h1>
        <div className="container_all">
          <div className="container_about">
            <div className="avatar_about">
              <img src={avatarAbout_1} alt="avatar" />
            </div>
            <h1>Kevin Richard</h1>
            <div className="link_about">
              <a href="exemple.com">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="exemple.com">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="exemple.com">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </div>
            <div className="testimony">
              <div className="info_about">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Similique debitis quia illo, pariatur a aut, consequuntur nam
                  totam ex accusantium recusandae? Maxime sapiente cumque
                  repudiandae corporis libero. A, officiis distinctio.
                </p>
              </div>
              <h2>Favorite movie & serie</h2>
              <div className="fave_about">
                <NavLink className="poster" to={`/Movie/${Movie_2?.id}`}>
                  <img
                    src={
                      `https://image.tmdb.org/t/p/w500` + Movie_2?.poster_path
                    }
                    alt="poster"
                  />
                </NavLink>

                <NavLink className="poster" to={`/tv/${TV_1?.id}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500` + TV_2?.poster_path}
                    alt="poster"
                  />
                </NavLink>
              </div>
            </div>
          </div>

          <div className="container_about">
            <div className="avatar_about">
              <img src={avatarAbout_2} alt="avatar" />
            </div>
            <h1>Lydia Haway</h1>
            <div className="link_about">
              <a href="exemple.com">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="exemple.com">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="exemple.com">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </div>
            <div className="testimony">
              <div className="info_about">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Similique debitis quia illo, pariatur a aut, consequuntur nam
                  totam ex accusantium recusandae? Maxime sapiente cumque
                  repudiandae corporis libero. A, officiis distinctio.
                </p>
              </div>
              <h2>Favorite movie & serie</h2>
              <div className="fave_about">
                <NavLink className="poster" to={`/Movie/${Movie_1?.id}`}>
                  <img
                    src={
                      `https://image.tmdb.org/t/p/w500` + Movie_1?.poster_path
                    }
                    alt="poster"
                  />
                </NavLink>

                <NavLink className="poster" to={`/tv/${TV_1?.id}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500` + TV_1?.poster_path}
                    alt="poster"
                  />
                </NavLink>
              </div>
            </div>
          </div>

          <div className="container_about">
            <div className="avatar_about">
              <img src={avatarAbout_3} alt="avatar" />
            </div>
            <h1>Anaïs Koussa</h1>
            <div className="link_about">
              <a href="exemple.com">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="exemple.com">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="exemple.com">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </div>
            <div className="testimony">
              <div className="info_about">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Similique debitis quia illo, pariatur a aut, consequuntur nam
                  totam ex accusantium recusandae? Maxime sapiente cumque
                  repudiandae corporis libero. A, officiis distinctio.
                </p>
              </div>
              <h2>Favorite movie & serie</h2>
              <div className="fave_about">
                <NavLink className="poster" to={`/Movie/${Movie_3?.id}`}>
                  <img
                    src={
                      `https://image.tmdb.org/t/p/w500` + Movie_3?.poster_path
                    }
                    alt="poster"
                  />
                </NavLink>

                <NavLink className="poster" to={`/tv/${TV_1?.id}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500` + TV_3?.poster_path}
                    alt="poster"
                  />
                </NavLink>
              </div>
            </div>
          </div>

          <div className="container_about">
            <div className="avatar_about">
              <img src={avatarAbout_4} alt="avatar" />
            </div>
            <h1>Quentin Motte</h1>
            <div className="link_about">
              <a href="exemple.com">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="exemple.com">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="exemple.com">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </div>
            <div className="testimony">
              <div className="info_about">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Similique debitis quia illo, pariatur a aut, consequuntur nam
                  totam ex accusantium recusandae? Maxime sapiente cumque
                  repudiandae corporis libero. A, officiis distinctio.
                </p>
              </div>
              <h2>Favorite movie & serie</h2>
              <div className="fave_about">
                <NavLink className="poster" to={`/Movie/${Movie_4?.id}`}>
                  <img
                    src={
                      `https://image.tmdb.org/t/p/w500` + Movie_4?.poster_path
                    }
                    alt="poster"
                  />
                </NavLink>

                <NavLink className="poster" to={`/tv/${TV_1?.id}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500` + TV_4?.poster_path}
                    alt="poster"
                  />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <div className="credits">
          <p>
            This product uses the TMDB API but is not endorsed or certified by
            TMDB
          </p>
          <a
            target="_blank"
            href="https://www.themoviedb.org/documentation/api"
          >
            <img src={logo_TMDB} alt="logo" />
          </a>
        </div>
        <Footer></Footer>
      </main>
    </>
  );
}

export default AboutPage;
