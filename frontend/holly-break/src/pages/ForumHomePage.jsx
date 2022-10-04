import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import AllTopic from "../component/AllTopic";
import Footer from "../component/Footer";
import Header from "../component/Header";

const BASEURL = process.env.REACT_APP_API_URL;

const ForumHomePage = () => {
  const [topic, setTopic] = useState([]);
  const [isDeleteTopic, setIsDeleteTopic] = useState(false);
  const [sortTopic, setSortTopic] = useState({
    sortTopic: "",
  });
  const handleChangeSort = (e) => {
    const { name, value } = e.target;
    setSortTopic({ ...sortTopic, [name]: value });
  };
  function fetchAllTopic() {
    axios.get(`${BASEURL}api/topic/`).then((res) => setTopic(res.data));
  }

  useEffect(() => {
    fetchAllTopic();
  }, [isDeleteTopic]);
  console.log(topic);

  return (
    <>
      <Header />
      <main className="homePageForum">
        <div className="navLink_container">
          <NavLink className="header_navLink" to={"/Forum/All"}>
            All
          </NavLink>
          <NavLink className="header_navLink" to={"/Forum/Movie"}>
            Movies
          </NavLink>
          <NavLink className="header_navLink" to={"/Forum/Serie"}>
            Series
          </NavLink>
          <NavLink className="header_navLink" to={"/Forum/Create"}>
            create Topic
          </NavLink>
        </div>
        <h1>All topics</h1>
        <select
          name="sortTopic"
          id="sortTopic"
          onChange={handleChangeSort}
          value={sortTopic.sortTopic}
        >
          <option id="option1" value="A-Z">
            A-Z
          </option>
          <option id="option2" value="Z-A">
            Z-A
          </option>
          <option id="option3" value="Date">
            Date
          </option>
        </select>
        <div className="all_topics">
          {topic
            .slice((a, b) => {
              if (sortTopic === "Z-A") {
                return b.title - a.title;
              } else if (sortTopic === "A-Z") {
                return a.title - b.title;
              }
            })
            .map((topic) => (
              <AllTopic
                isDeleteTopic={isDeleteTopic}
                setIsDeleteTopic={setIsDeleteTopic}
                topic={topic}
                key={topic._id}
                // isUpdateTopic={isUpdateTopic}
                // setIsUpdateTopic={setIsUpdateTopic}
              />
            ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ForumHomePage;
