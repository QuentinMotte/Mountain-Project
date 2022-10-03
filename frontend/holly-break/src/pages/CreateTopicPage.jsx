import axios from "axios";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Footer from "../component/Footer";
import Header from "../component/Header";

const CreateTopicPage = () => {
  const [topicForm, setTopicForm] = useState({
    title: "",
    category: "All",
    content: "",
  });

  const userFormState = {
    title: topicForm.title,
    category: topicForm.category,
    id_profile: localStorage.getItem("profile"),
    content: topicForm.content,
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTopicForm({ ...topicForm, [name]: value });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    await axios
      .post("http://localhost:5000/api/topic/create", userFormState)
      .then((response) => {
        window.location.href = "/Forum/All";
        console.log(response);
        console.log(response.status);
      })
      .catch((error) => {
        console.log(error);
      });
  }
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

        <div className="form_create_topic">
          <form action="post">
            <div className="form_create">
              <label htmlFor="title">Title</label>
              <input
                id="title"
                name="title"
                type="text"
                value={topicForm.title}
                onChange={handleChange}
              />
            </div>
            <div className="form_cat">
              <label htmlFor="category">Category</label>
              <select
                name="category"
                id="category"
                value={topicForm.category}
                onChange={handleChange}
              >
                <option value="all">All</option>
                <option value="film">Film</option>
                <option value="serie">Serie</option>
              </select>
            </div>
            <div className="form_create">
              <label htmlFor="content">Content</label>
              <textarea
                name="content"
                id="content"
                cols="30"
                rows="10"
                value={topicForm.content}
                onChange={handleChange}
              ></textarea>
            </div>
            <input type="submit" onClick={handleSubmit} value="Send" />
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CreateTopicPage;
