import { useEffect, useState } from "react";
import axios from "axios";

const FormUpdate = ({ answers, setIsUpdateAnswer, isUpdateAnswer }) => {
  const [answerForm, setAnswerForm] = useState({
    content: `${answers.content}`,
  });

  const answerFormState = {
    content: answerForm.content,
  };

  const handleChangeAnswer = (e) => {
    const { name, value } = e.target;
    setAnswerForm({ ...answerForm, [name]: value });
  };

  async function handleSubmitAnswer(e) {
    e.preventDefault();
    await axios
      .put(
        `http://localhost:5000/api/answer/update_like/${answers._id}`,
        answerFormState
      )
      .then((response) => {
        setIsUpdateAnswer(false);
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
          onChange={handleChangeAnswer}
        ></textarea>
        <input type="submit" onClick={handleSubmitAnswer} />
        <button onClick={() => setIsUpdateAnswer(false)}>Cancel</button>
      </form>
    </div>
  );
};

export default FormUpdate;
