import axios from "axios";
import React, { useState } from "react";
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
      <main>
        <form action="post">
          <div>
            <label htmlFor="title">Title</label>
            <input
              id="title"
              name="title"
              type="text"
              value={topicForm.title}
              onChange={handleChange}
            />
          </div>
          <div>
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
          <div>
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
          <input type="submit" onClick={handleSubmit} />
        </form>
      </main>
      <Footer />
    </>
  );
};

export default CreateTopicPage;
