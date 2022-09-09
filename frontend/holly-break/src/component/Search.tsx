import { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";

const API_KEY = "a378b12e0a9383634a503a8f29d43915";

interface moviesProps {
  map(arg0: (item: any) => JSX.Element): import("react").ReactNode;
  id: number;
  overview: string;
  poster_path: string;
  title: string;
  backdrop_path: string;
  media_type: string;
}

function Search() {
  let [SearchMovies, setSearchMovies] = useState<moviesProps | undefined>();
  let id = useParams();
  const ID = id.id;
  const URL = `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&query=${ID}`;

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    const { data } = await axios.get(URL);
    setSearchMovies(data.results);
  };

  return (
    <>
      <div className="container_genre">
        {SearchMovies?.map((movie) => (
          <NavLink className="poster" to={`/${movie.media_type}/${movie.id}`}>
            <div id={movie.id} className="movies_container_poster">
              <img
                src={`https://image.tmdb.org/t/p/w500` + movie.poster_path}
                alt="poster"
              />
            </div>
          </NavLink>
        ))}
      </div>
    </>
  );
}

export default Search;
