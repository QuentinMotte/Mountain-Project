import { useEffect, useState } from "react";
import axios from "axios";

const FormUpdate = ({ answers, setIsUpdate, isUpdate }) => {
  const [answerForm, setAnswerForm] = useState({
    content: "",
  });

  const answerFormState = {
    content: answerForm.content,
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAnswerForm({ ...answerForm, [name]: value });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    await axios
      .put(
        `http://localhost:5000/api/answer/update/${answers._id}`,
        answerFormState
      )
      .then((response) => {
        setIsUpdate(false);
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
        <input type="submit" onClick={handleSubmit} />
        <button onClick={() => setIsUpdate(false)}>Cancel</button>
      </form>
    </div>
  );
};

export default FormUpdate;
