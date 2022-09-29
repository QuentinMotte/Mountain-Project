import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import AllTopic from "../component/AllTopic";
import Footer from "../component/Footer";
import Header from "../component/Header";

const ForumHomePage = () => {
  const [topic, setTopic] = useState([]);
  const [isDeleteTopic, setIsDeleteTopic] = useState(false);

  function fetchAllTopic() {
    axios
      .get("http://localhost:5000/api/topic/")
      .then((res) => setTopic(res.data));
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
        <select name="sortTopic" id="sortTopic" onChange={}>
          <option id="option1" value="A-Z">
            A-Z
          </option>
          <option id="option2" value="Z-A">
            Z-A
          </option>
        </select>
        <div className="all_topics">
          {topic.map((topic) => (
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
