import { useEffect, useState } from "react";
import axios from "axios";

const AnswerTopic = ({ isAnswer, setIsAnswer, topic }) => {
  const [answerData, setAnswerData] = useState([]);

  function fetchAnswerData() {
    axios
      .get(`http://localhost:5000/api/answer/oneTopic/${topic._id}`)
      .then((res) => setAnswerData(res.data));
  }
  useEffect(() => {
    fetchAnswerData();
  }, []);
  console.log(answerData);
  return <div></div>;
};

export default AnswerTopic;
