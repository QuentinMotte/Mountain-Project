import React from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Footer from "../component/Footer";
import Header from "../component/Header";

interface Genres {
  map(arg0: (item: any) => JSX.Element): import("react").ReactNode;
  id: number;
  name: string;
}

function Homepage() {
  const url: string =
    "https://api.themoviedb.org/3/genre/movie/list?api_key=a378b12e0a9383634a503a8f29d43915";

  const [genres, setGenres] = React.useState([]);

  const getGenres = async () => {
    const { data } = await axios.get(url);
    setGenres(data.genres);
  };

  React.useEffect(() => {
    getGenres();
  }, []);

  const urlCallGender = (id: number) => {
    return `https://api.themoviedb.org/3/discover/movie?api_key=a378b12e0a9383634a503a8f29d43915&language=en-US&with_genres=${id}`;
  };

  const [movies, setMovies] = React.useState([]);

  const getMovies = async (id: number) => {
    const { data } = await axios.get(urlCallGender(id));
    setMovies(data.results);
  };

  React.useEffect(() => {
    getMovies(28);
  }, []);

  return (
    <>
      <Header></Header>
      <main className="content-container">
        <div>
          <h1>Homepage</h1>
          <p>This is the homepage page</p>
          {genres.map((item: Genres) => (
            <>
              <p>{item.name}</p>
              <p>{item.id}</p>
            </>
          ))}
          <NavLink to="/">Landing</NavLink>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}

export default Homepage;
