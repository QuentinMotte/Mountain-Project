import React from "react";
import { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";

const API: any = process.env.REACT_APP_API_KEY;

const API_KEY = API.replace(";", "");

interface SeriesProps {
  map(arg0: (item: any) => JSX.Element): import("react").ReactNode;
  backdrop_path: string;
  poster_path: string;
  id: string;
  name: string;
  data: string;
}

interface moviesProps {
  map(arg0: (item: any) => JSX.Element): import("react").ReactNode;
  backdrop_path: string;
  poster_path: string;
  id: string;
  title: string;
}

function Fave() {
  let [Serie_1, setSerie_1] = useState<SeriesProps | undefined>();
  let [Serie_2, setSerie_2] = useState<SeriesProps | undefined>();

  const input = ["56570", "2316", "1417", "1100"];

  useEffect(() => {
    getTV();
  }, []);

  const getTV = async () => {
    input.map((id) => {
      axios
        .get(
          `https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}&language=en-US`
        )
        .then((res: any) => {
          const result = res.data;
          setSerie_1(result);
        });
    });
  };

  return (
    <>
      <div className="container_genre">
        <div></div>
      </div>
    </>
  );
}

export default Fave;
