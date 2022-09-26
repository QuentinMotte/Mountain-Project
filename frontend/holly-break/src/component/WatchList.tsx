import React from "react";
import axios from "axios";

function WatchList() {
  const id = localStorage.getItem("profile");

  const API: any = process.env.REACT_APP_API_KEY;
  const API_KEY = API.replace(";", "");

  const [watchList, setWatchList] = React.useState<any>([]);
  const [movies, setMovies] = React.useState<any>([]);

  const getProfileWatchlistMovie = async () => {
    axios.get(`http://localhost:5000/api/profile/${id}`).then((response) => {
      setWatchList(response.data.watchList_movie);
    });
  };

  React.useEffect(() => {
    getProfileWatchlistMovie();
  }, []);

  const getMovie = async (id: string) => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
      )
      .then((res) => {
        setMovies((movies: any) => [...movies, res.data]);
      });
  };

  React.useEffect(() => {
    for (let i = 0; i < watchList.length; i++) {
      getMovie(watchList[i]);
    }
  }, [watchList]);

  return (
    <>
      <div>
        <h1>WatchList</h1>
        {movies.map((movie: any) => (
          <div key={movie.id}>
            <h2>{movie.title}</h2>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default WatchList;
