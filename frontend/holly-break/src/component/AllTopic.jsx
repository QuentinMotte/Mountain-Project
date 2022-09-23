import axios from "axios";
import { useEffect, useState } from "react";
import AnswerTopic from "./AnswerTopic";
import CreateAnswerTopic from "./CreateAnswerTopic";

const AllTopic = ({ topic }) => {
  const [profile, setProfile] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isAnswer, setIsAnswer] = useState(false);
  console.log(isOpen);

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
      <h2>{topic.title}</h2>
      <p>{topic.content}</p>
      <p>{topic.category}</p>
      <p>
        Created at {topic.createdAt} by {profile.pseudo}
      </p>
      <button onClick={() => setIsAnswer(true)}>view more</button>
      {isAnswer && (
        <AnswerTopic
          topic={topic}
          isAnswer={isAnswer}
          setIsAnswer={setIsAnswer}
        />
      )}
      {isOpen && (
        <CreateAnswerTopic
          topic={topic}
          profile={profile}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      )}
    </div>
  );
};

export default AllTopic;
