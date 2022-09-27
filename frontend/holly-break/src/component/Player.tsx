import React from "react";
import { useState, useEffect } from "react";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const API: any = process.env.REACT_APP_API_KEY;

const API_KEY = API.replace(";", "");

interface trailerProps {
  map(arg0: (item: any) => JSX.Element): import("react").ReactNode;
  name: string;
  key: string;
}

interface picturesProps {
  map(arg0: (item: any) => JSX.Element): import("react").ReactNode;
  file_path: string;
}

function Player() {
  let id = useParams();
  const ID = id.id;

  const URL = `https://api.themoviedb.org/3/movie/${ID}/videos?api_key=${API_KEY}&language=en-US`;
  const URLIMG = `https://api.themoviedb.org/3/movie/${ID}/images?api_key=${API_KEY}`;

  let [movies, setMovies] = useState<trailerProps | undefined>();
  let [pictures, setPictures] = useState<picturesProps | undefined>();

  useEffect(() => {
    getMovie();
    getPicture();
  }, []);

  const getMovie = async () => {
    const { data } = await axios.get(URL);
    setMovies(data.results[0]);
  };

  const getPicture = async () => {
    const { data } = await axios.get(URLIMG);
    setPictures(data.backdrops[0]);
  };

  let navigate = useNavigate();

  return (
    <>
      <div className="container_trailer">
        <button className="button_back" onClick={() => navigate(-1)}>
          Back
        </button>
        <div className="trailer">
          <iframe
            src={`https://www.youtube.com/embed/` + movies?.key}
            title="Youtube video player"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default Player;
