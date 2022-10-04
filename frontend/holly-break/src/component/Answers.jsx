import { useEffect, useState } from "react";
import axios from "axios";
import FormUpdateAnswer from "./FormUpdateAnswer";
const Answers = ({
  answers,
  isDeleteAnswer,
  setIsDeleteAnswer,
  isUpdateAnswer,
  setIsUpdateAnswer,
  isLike,
  setIsLike,
  isUnlike,
  setIsUnlike,
}) => {
  const [profileAnswer, setProfileAnswer] = useState([]);
  const [isLikeUpdate, setIsLikeUpdate] = useState(false);

  function fetchProfileByIdForAnswers() {
    axios
      .get(`http://localhost:5000/api/profile/${answers.id_profile}`)
      .then((res) => setProfileAnswer(res.data))
      .catch((error) => {
        console.log(error);
      });
  }
  console.log(answers);

  const idProfileLike = {
    like: localStorage.getItem("profile"),
  };

  function addLikeForComment() {
    axios
      .patch(
        `http://localhost:5000/api/answer/update_like/${answers._id}`,
        idProfileLike
      )
      .then((res) => setIsLike(true) + setIsUnlike(false) + console.log(res))
      .catch((err) => {
        console.log(err);
      });
  }

  function removeLikeForComment() {
    axios
      .patch(
        `http://localhost:5000/api/answer/remove_like/${answers._id}`,
        idProfileLike
      )
      .then((res) => setIsUnlike(true) + setIsLike(false) + console.log(res))
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    fetchProfileByIdForAnswers();
  }, []);
  //console.log(profileAnswer);
  //console.log(answers);
  //console.log(localStorage.getItem("profile"));

  async function handleDeleteAnswer() {
    await axios
      .delete(`http://localhost:5000/api/answer/${answers._id}`)
      .then((res) => console.log(res) + setIsDeleteAnswer(true))
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
              handleDeleteAnswer();
              setIsDeleteAnswer(false);
            }
          }}
        >
          Delete Answer
        </button>
      )}
      {answers.id_profile === localStorage.getItem("profile") && (
        <button onClick={() => setIsUpdateAnswer(true)}>Update Answer</button>
      )}
      {isUpdateAnswer && (
        <FormUpdateAnswer
          answers={answers}
          setIsUpdateAnswer={setIsUpdateAnswer}
          isUpdateAnswer={isUpdateAnswer}
        />
      )}
      <button onClick={addLikeForComment}>Like</button>
      <button onClick={removeLikeForComment}>UnLike</button>
      <p>{answers.like.length}</p>
    </div>
  );
};

export default Answers;
