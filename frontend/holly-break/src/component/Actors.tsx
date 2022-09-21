import React from "react";
import icon from "../img/Profile-Icon.png";
import { useState, useEffect } from "react";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const API: any = process.env.REACT_APP_API_KEY;

const API_KEY = API.replace(";", "");

interface ActorProps {
  map(arg0: (item: any) => JSX.Element): import("react").ReactNode;
  id: number;
  birthday: string;
  known_for_department: string;
  deathday: string;
  name: string;
  biography: string;
  place_of_birth: string;
  profile_path: string;
  imdb_id: string;
}

function Actors() {
  let id = useParams();
  const ID = id.id;

  const URL = `https://api.themoviedb.org/3/person/${ID}?api_key=${API_KEY}&language=en-US`;

  let [Actor, setActor] = useState<ActorProps | undefined>();
  useEffect(() => {
    getActor();
  }, []);

  const getActor = async () => {
    const { data } = await axios.get(URL);
    setActor(data);
  };

  const getPicture = () => {
    if (Actor?.profile_path === null) {
      return icon;
    } else {
      return `https://image.tmdb.org/t/p/original` + Actor?.profile_path;
    }
  };

  let navigate = useNavigate();

  return (
    <>
      <div className="container_actor">
        <div className="container_info_actors">
          <div className="image_actor">
            <img src={getPicture()} alt="actor" />
            <div className="name_actor">
              <a
                target="_blank"
                href={`https://www.imdb.com/name/${Actor?.imdb_id}/`}
              >
                <h1>{Actor?.name}</h1>
              </a>
            </div>
          </div>
          <div className="info_actor">
            <div className="little_info">
              <div className="div_info">
                <h4>Birthday:</h4>
                <br />
                <p>{Actor?.birthday}</p>
              </div>
              <div className="div_info">
                <h4>Place of birth:</h4>
                <br />
                <p>{Actor?.place_of_birth}</p>
              </div>
              <div className="div_info">
                <h4>Activity:</h4>
                <br />
                <p>{Actor?.known_for_department}</p>
              </div>
            </div>

            <hr />

            <p className="bio">{Actor?.biography}</p>

            <br />
          </div>
          <button className="button_back" onClick={() => navigate(-1)}>
            Back
          </button>
        </div>
      </div>
    </>
  );
}

export default Actors;
