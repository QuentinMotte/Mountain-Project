import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import AnswerTopic from "./AnswerTopic";

import FormAnswer from "./FormAnswer";
import MoreAnswers from "./MoreAnswers";

const AllTopic = ({ topic }) => {
  const [profile, setProfile] = useState([]);
  const [isAnswer, setIsAnswer] = useState(false);
  const [isAddAnswer, setIsAddAnswer] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);

  function fetchProfileById() {
    axios
      .get(`http://localhost:5000/api/profile/${topic.id_profile}`)
      .then((res) => setProfile(res.data));
  }

  useEffect(() => {
    fetchProfileById();
  }, []);

  console.log(profile);
  return (
    <div className="topics">
      <div className="title_forum_topic">
        <h2>{topic.title}</h2>
        <p>
          Created at {topic.createdAt} by {profile.pseudo}
        </p>
      </div>
      <p className="tag">{topic.category}</p>

      <p className="content_topic">{topic.content}</p>

      {/* <AnswerTopic
        topic={topic}
        isAnswer={isAnswer}
        setIsAnswer={setIsAnswer}
      /> */}

      <div className="button_forum">
        {!isAnswer && (
          <button onClick={() => setIsAnswer(true)}>Responses</button>
        )}

        <button onClick={() => setIsAddAnswer(true)}>Add Answer</button>
        {isAddAnswer && (
          <FormAnswer
            topic={topic}
            isAddAnswer={isAddAnswer}
            setIsAddAnswer={setIsAddAnswer}
          />
        )}
      </div>

      {isAnswer && (
        <MoreAnswers
          topic={topic}
          key={topic._id}
          setIsAnswer={setIsAnswer}
          isAnswer={isAnswer}
          profile={profile}
          isAddAnswer={isAddAnswer}
          isDelete={isDelete}
          setIsDelete={setIsDelete}
          isUpdate={isUpdate}
          setIsUpdate={setIsUpdate}
        />
      )}
    </div>
  );
};

export default AllTopic;
