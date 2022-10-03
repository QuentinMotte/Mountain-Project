import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import AllTopic from "../component/AllTopic";
import Footer from "../component/Footer";
import Header from "../component/Header";

function ForumHomePageTV() {
  const [topic, setTopic] = useState([]);

  function fetchAllTopic() {
    axios
      .get("http://localhost:5000/api/topic/")
      .then((res) => setTopic(res.data));
  }

  useEffect(() => {
    fetchAllTopic();
  }, []);
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
        <h1>Series topics</h1>
        <div className="all_topics">
          {topic
            .filter((topic) => topic.category === "serie")
            .map((topic) => (
              <AllTopic topic={topic} key={topic._id} />
            ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default ForumHomePageTV;