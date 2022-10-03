import { useEffect, useState } from "react";
import axios from "axios";
import FormUpdateAnswer from "./FormUpdateAnswer";
const Answers = ({ answers, isDelete, setIsDelete, isUpdate, setIsUpdate }) => {
  const [profileAnswer, setProfileAnswer] = useState([]);

  function fetchProfileByIdForAnswers() {
    axios
      .get(`http://localhost:5000/api/profile/${answers.id_profile}`)
      .then((res) => setProfileAnswer(res.data))
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    fetchProfileByIdForAnswers();
  }, []);
  //console.log(profileAnswer);
  //console.log(answers);
  //console.log(localStorage.getItem("profile"));

  async function handleDelete() {
    await axios
      .delete(`http://localhost:5000/api/answer/${answers._id}`)
      .then((res) => console.log(res) + setIsDelete(true))
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="answers_topic">
      <p>{answers.content} </p>
      <p>By {profileAnswer.pseudo}</p>
      {answers.id_profile === localStorage.getItem("profile") && (
        <button
          onClick={() => {
            if (
              window.confirm("Are you sure you wish to delete your answer ?")
            ) {
              handleDelete();
              setIsDelete(false);
            }
          }}
        >
          Delete
        </button>
      )}
      {answers.id_profile === localStorage.getItem("profile") && (
        <button onClick={() => setIsUpdate(true)}>Update</button>
      )}
      {isUpdate && (
        <FormUpdateAnswer
          answers={answers}
          setIsUpdate={setIsUpdate}
          isUpdate={isUpdate}
        />
      )}
    </div>
  );
};

export default Answers;
