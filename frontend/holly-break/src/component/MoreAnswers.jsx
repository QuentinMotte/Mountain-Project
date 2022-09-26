import { useEffect, useState } from "react";
import axios from "axios";
import Answers from "./Answers";

const AnswerTopic = ({
  isAnswer,
  setIsAnswer,
  topic,
  isAddAnswer,
  isDelete,
  setIsDelete,
  isUpdate,
  setIsUpdate,
}) => {
  const [answerData, setAnswerData] = useState([]);

  function fetchAnswerData() {
    axios
      .get(`http://localhost:5000/api/answer/oneTopic/${topic._id}`)
      .then((res) => setAnswerData(res.data));
  }
  useEffect(() => {
    fetchAnswerData();
  }, [isAddAnswer, isDelete, isUpdate]);
  console.log(answerData);
  return (
    <div>
      {answerData.map((answers) => (
        <Answers
          answers={answers}
          key={answers._id}
          isDelete={isDelete}
          setIsDelete={setIsDelete}
          isAddAnswer={isAddAnswer}
          isUpdate={isUpdate}
          setIsUpdate={setIsUpdate}
        />
      ))}
      <button onClick={() => setIsAnswer(false)}>Hide</button>
    </div>
  );
};

export default AnswerTopic;
