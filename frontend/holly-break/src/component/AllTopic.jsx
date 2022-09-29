import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import AnswerTopic from "./AnswerTopic";

import FormAnswer from "./FormAnswer";
import MoreAnswers from "./MoreAnswers";
import FormUpdateTopic from "./FormUpdateTopic";

const AllTopic = ({
  topic,
  isDeleteTopic,
  setIsDeleteTopic,
  // isUpdateTopic,
  // setIsUpdateTopic,
}) => {
  const [profile, setProfile] = useState([]);
  const [isAnswer, setIsAnswer] = useState(false);
  const [isAddAnswer, setIsAddAnswer] = useState(false);
  const [isDeleteAnswer, setIsDeleteAnswer] = useState(false);
  const [isUpdateAnswer, setIsUpdateAnswer] = useState(false);
  const [isUpdateTopic, setIsUpdateTopic] = useState(false);

  function fetchProfileById() {
    axios
      .get(`http://localhost:5000/api/profile/${topic.id_profile}`)
      .then((res) => setProfile(res.data));
  }

  useEffect(() => {
    fetchProfileById();
  }, []);

  async function handleDeleteTopic() {
    await axios
      .delete(`http://localhost:5000/api/topic/${topic._id}`)
      .then((res) => console.log(res) + setIsDeleteTopic(true))
      .catch((error) => {
        console.log(error);
      });
  }

  console.log(profile);
  return (
    <div className="topics">
      <h2>{topic.title}</h2>
      <button onClick={() => setIsAddAnswer(true)}>Add Answer</button>
      {isAddAnswer && (
        <FormAnswer
          topic={topic}
          isAddAnswer={isAddAnswer}
          setIsAddAnswer={setIsAddAnswer}
        />
      )}

      {topic.id_profile === localStorage.getItem("profile") && (
        <button
          onClick={() => {
            if (
              window.confirm("Are you sure you wish to delete your topic ?")
            ) {
              handleDeleteTopic();
              setIsDeleteTopic(false);
            }
          }}
        >
          Delete Topic
        </button>
      )}
      {topic.id_profile === localStorage.getItem("profile") && (
        <button onClick={() => setIsUpdateTopic(true)}>Update Topic</button>
      )}
      {isUpdateTopic && (
        <FormUpdateTopic
          topic={topic}
          setIsUpdateTopic={setIsUpdateTopic}
          isUpdateTopic={isUpdateTopic}
        />
      )}

      <p>{topic.content}</p>
      <p>{topic.category}</p>
      <p>
        Created at {topic.createdAt} by {profile.pseudo}
      </p>
      {/* <AnswerTopic
        topic={topic}
        isAnswer={isAnswer}
        setIsAnswer={setIsAnswer}
      /> */}

      {isAnswer && (
        <MoreAnswers
          topic={topic}
          key={topic._id}
          setIsAnswer={setIsAnswer}
          isAnswer={isAnswer}
          profile={profile}
          isAddAnswer={isAddAnswer}
          isDeleteAnswer={isDeleteAnswer}
          setIsDeleteAnswer={setIsDeleteAnswer}
          isUpdateAnswer={isUpdateAnswer}
          setIsUpdateAnswer={setIsUpdateAnswer}
        />
      )}
      {!isAnswer && (
        <button onClick={() => setIsAnswer(true)}>Responses</button>
      )}
    </div>
  );
};

export default AllTopic;
