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

  function fetchAnswerData() {
    axios
      .get(`http://localhost:5000/api/answer/oneTopic/${topic._id}`)
      .then((res) => setAnswerData(res.data));
  }
  useEffect(() => {
    fetchAnswerData();
  }, [isAddAnswer, isDeleteAnswer, isUpdateAnswer]);
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
        />
      ))}
      <button onClick={() => setIsAnswer(false)}>Hide</button>
    </div>
  );
};

export default AnswerTopic;
