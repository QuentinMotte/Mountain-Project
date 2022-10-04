import { useEffect, useState } from "react";
import axios from "axios";
import Answers from "./Answers";

const AnswerTopic = ({ isAnswer, setIsAnswer, topic }) => {
  const [answerData, setAnswerData] = useState([]);
  const BASEURL = process.env.REACT_APP_API_URL;

  function fetchAnswerData() {
    axios
      .get(`${BASEURL}api/answer/oneTopic/${topic._id}`)
      .then((res) => setAnswerData(res.data));
  }
  useEffect(() => {
    fetchAnswerData();
  }, []);
  console.log(answerData);
  return (
    <div>
      {answerData.slice(0, 3).map((answers) => (
        <Answers answers={answers} key={answers._id} />
      ))}
    </div>
  );
};

export default AnswerTopic;
