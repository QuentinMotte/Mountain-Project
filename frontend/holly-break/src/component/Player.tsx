import React from "react";
import { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";

const API_KEY = "a378b12e0a9383634a503a8f29d43915";

interface trailerProps {
  map(arg0: (item: any) => JSX.Element): import("react").ReactNode;
  name: string;
  key: string;
}

function Player() {
  let id = useParams();
  const ID = id.id;

  const URL = `https://api.themoviedb.org/3/movie/${ID}/videos?api_key=${API_KEY}&language=en-US`;
  let [movies, setMovies] = useState<trailerProps | undefined>();

  useEffect(() => {
    getMovie();
  }, []);

  const getMovie = async () => {
    const { data } = await axios.get(URL);
    setMovies(data.results[0]);
  };

  console.log(movies?.key);

  return (
    <>
      <div className="trailer">
        <iframe
          src={`https://www.youtube.com/embed/` + movies?.key}
          title="Youtube video player"
        ></iframe>
      </div>
    </>
  );
}

export default Player;
