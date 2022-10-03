import axios from "axios";
import React, { useState } from "react";

const FormAnswer = ({ topic, isAddAnswer, setIsAddAnswer }) => {
  const [answerForm, setAnswerForm] = useState({
    content: "",
  });

  const answerFormState = {
    id_profile: localStorage.getItem("profile"),
    id_topic: topic._id,
    content: answerForm.content,
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAnswerForm({ ...answerForm, [name]: value });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    await axios
      .post("http://localhost:5000/api/answer/create", answerFormState)
      .then((response) => {
        setIsAddAnswer(false);
        console.log(response);
        console.log(response.status);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div className="formAnswer">
      <form action="post">
        <label htmlFor="content">Your answer</label>
        <textarea
          name="content"
          id="content"
          cols="50"
          rows="10"
          value={answerForm.content}
          onChange={handleChange}
        ></textarea>
        <div className="button_form_forum">
          <input type="submit" onClick={handleSubmit} value="Send" />
          <button onClick={() => setIsAddAnswer(false)}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default FormAnswer;
