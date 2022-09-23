import React from "react";

const CreateAnswerTopic = ({ topic, profile, isOpen, setIsOpen }) => {
  return (
    <div>
      <textarea name="answer" id="" cols="30" rows="10"></textarea>
      <button type="submit" onClick={() => setIsOpen(false)}>
        submit
      </button>
    </div>
  );
};

export default CreateAnswerTopic;
