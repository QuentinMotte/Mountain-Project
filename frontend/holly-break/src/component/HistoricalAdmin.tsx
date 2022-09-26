import React from "react";
import axios from "axios";

type HistModal = {
  isOpen: boolean;
  setIsOpen: any;
  profile: any;
};

function HistoricalAdmin({ isOpen, setIsOpen, profile }: HistModal) {
  const API: any = process.env.REACT_APP_API_KEY;
  const API_KEY = API.replace(";", "");

  const favSerie: Array<string> = profile.historic_serie;
  const favMovie: Array<string> = profile.historic_movie;

  const [movies, setMovies] = React.useState<any>([]);
  const [series, setSeries] = React.useState<any>([]);

  const id_profile = profile._id;

  const getSerie = async () => {
    for (let i = 0; i < favSerie.length; i++) {
      axios
        .get(
          `https://api.themoviedb.org/3/tv/${favSerie[i]}?api_key=${API_KEY}&language=en-US`
        )
        .then((res) => {
          setSeries((series: any) => [...series, res.data]);
        });
    }
  };

  const getMovie = async () => {
    for (let i = 0; i < favMovie.length; i++) {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${favMovie[i]}?api_key=${API_KEY}&language=en-US`
        )
        .then((res) => {
          setMovies((movies: any) => [...movies, res.data]);
        });
    }
  };

  React.useEffect(() => {
    getSerie();
    getMovie();
  }, []);

  function removeDuplicates(originalArray: any, prop: any) {
    var newArray: any = [];
    var lookupObject: any = {};

    for (var i in originalArray) {
      lookupObject[originalArray[i][prop]] = originalArray[i];
    }

    for (i in lookupObject) {
      newArray.push(lookupObject[i]);
    }

    return newArray;
  }

  const seriesUnique = removeDuplicates(series, "id");
  const moviesUnique = removeDuplicates(movies, "id");

  function deleteOneSerie(id: any) {
    axios
      .patch(
        `http://localhost:5000/api/profile/r_historic_serie/${id_profile}`,
        { watchList_serie: id }
      )
      .then((res) => {
        setSeries(series.filter((serie: any) => serie.id !== id));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function deleteOneMovie(id: any) {
    axios
      .patch(
        `http://localhost:5000/api/profile/r_historic_movie/${id_profile}`,
        { watchList_movie: id }
      )
      .then((res) => {
        setMovies(movies.filter((movie: any) => movie.id !== id));
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div className="modal-admin">
      <div className="modal-container">
        <i
          className="fa-solid fa-square-xmark"
          onClick={() => setIsOpen(false)}
        ></i>
        <div className="modal-content">
          {seriesUnique.map((item: any) => {
            return (
              <>
                <div className="content-container-with-button">
                  <img
                    src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                    alt=""
                    key={item.name}
                  />
                  <a onClick={() => deleteOneSerie(item.id)}>
                    <i className="fa-solid fa-trash"></i>
                  </a>
                </div>
              </>
            );
          })}
          {moviesUnique.map((item: any) => {
            return (
              <>
                <div className="content-container-with-button">
                  <img
                    src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                    alt=""
                    key={item.title}
                  />
                  <a onClick={() => deleteOneMovie(item.id)}>
                    <i className="fa-solid fa-trash"></i>
                  </a>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default HistoricalAdmin;
