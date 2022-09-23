import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import AllTopic from "../component/AllTopic";
import Footer from "../component/Footer";
import Header from "../component/Header";

const ForumHomePage = () => {
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
          <NavLink className="header_navLink" to={"/Forum/Create"}>
            create Topic
          </NavLink>
          <NavLink className="header_navLink" to={"/"}>
            Series
          </NavLink>
          <NavLink className="header_navLink" to={"/"}>
            Films
          </NavLink>
          <NavLink className="header_navLink" to={"/Forum/All"}>
            All
          </NavLink>
        </div>
        <h1>All topics</h1>
        <div className="all_topics">
          {topic.map((topic) => (
            <AllTopic topic={topic} key={topic._id} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ForumHomePage;
