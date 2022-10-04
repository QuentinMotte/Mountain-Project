import React, { useState } from "react";
import axios from "axios";

const FormUpdateTopic = ({ topic, isUpdateTopic, setIsUpdateTopic }) => {
  const [topicFormU, setTopicFormU] = useState({
    title: `${topic.title}`,
    category: `${topic.category}`,
    content: `${topic.content}`,
  });

  const topicFormUpdate = {
    title: topicFormU.title,
    category: topicFormU.category,
    id_profile: localStorage.getItem("profile"),
    content: topicFormU.content,
  };

  const BASEURL = process.env.REACT_APP_API_URL;

  const handleChangeTopic = (e) => {
    const { name, value } = e.target;
    setTopicFormU({ ...topicFormU, [name]: value });
  };

  async function handleSubmitTopic(e) {
    e.preventDefault();
    await axios
      .put(`${BASEURL}api/topic/${topic._id}`, topicFormUpdate)
      .then((response) => {
        setIsUpdateTopic(false);
        window.location.href = "/Forum/All";
        console.log(response);
        console.log(response.status);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="form_create_topic">
      <form action="post">
        <div className="form_create">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            name="title"
            type="text"
            value={topicFormU.title}
            onChange={handleChangeTopic}
          />
        </div>
        <div className="form_cat">
          <label htmlFor="category">Category</label>
          <select
            name="category"
            id="category"
            value={topicFormU.category}
            onChange={handleChangeTopic}
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
            value={topicFormU.content}
            onChange={handleChangeTopic}
          ></textarea>
        </div>
        <div className="button_form_forum">
          <input type="submit" onClick={handleSubmitTopic} />
          <button onClick={() => setIsUpdateTopic(false)}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default FormUpdateTopic;
