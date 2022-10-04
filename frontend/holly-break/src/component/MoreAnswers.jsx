import { useEffect, useState } from "react";
import axios from "axios";
import Answers from "./Answers";

const AnswerTopic = ({
  isAnswer,
  setIsAnswer,
  topic,
  isAddAnswer,
  isDeleteAnswer,
  setIsDeleteAnswer,
  isUpdateAnswer,
  setIsUpdateAnswer,
}) => {
  const [answerData, setAnswerData] = useState([]);
  const [isLike, setIsLike] = useState(false);
  const [isUnlike, setIsUnlike] = useState(false);

  const BASEURL = process.env.REACT_APP_API_URL;

  function fetchAnswerData() {
    axios
      .get(`${BASEURL}api/answer/oneTopic/${topic._id}`)
      .then((res) => setAnswerData(res.data));
  }
  useEffect(() => {
    fetchAnswerData();
  }, [isAddAnswer, isDeleteAnswer, isUpdateAnswer, isLike, isUnlike]);
  console.log(answerData);
  return (
    <div>
      {answerData.map((answers) => (
        <Answers
          answers={answers}
          key={answers._id}
          isDeleteAnswer={isDeleteAnswer}
          setIsDeleteAnswer={setIsDeleteAnswer}
          isAddAnswer={isAddAnswer}
          isUpdateAnswer={isUpdateAnswer}
          setIsUpdateAnswer={setIsUpdateAnswer}
          isLike={isLike}
          setIsLike={setIsLike}
          isUnlike={isUnlike}
          setIsUnlike={setIsUnlike}
        />
      ))}
      <button onClick={() => setIsAnswer(false)}>Hide</button>
    </div>
  );
};

export default AnswerTopic;
