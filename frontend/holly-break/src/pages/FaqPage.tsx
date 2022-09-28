import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Footer from "../component/Footer";
import Header from "../component/Header";

const data = [
  {
    question: "What is HollyBreak ?",
    answer:
      "First, we are a streaming service for all your favorite movies and series ! And we are also a Forum where you will be able to discuss movies and TV Show with the community",
  },

  {
    question: "How can you subscribe to our service ?",
    answer:
      "Simply check the subscribe button and complete your informations to create your account",
  },

  {
    question: "What are our rates ?",
    answer: "It's free !",
  },

  {
    question: "How can you create and/or modify profiles ?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ducimus delectus adipisci! Sed, corrupti error quisquam voluptatibus optio itaque cum incidunt aperiam hic excepturi ipsum neque suscipit ab quasi quas",
  },

  {
    question: "How can you update your account informations ?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ducimus delectus adipisci! Sed, corrupti error quisquam voluptatibus optio itaque cum incidunt aperiam hic excepturi ipsum neque suscipit ab quasi quas",
  },

  {
    question: "What are the devices supported by our service ?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ducimus delectus adipisci! Sed, corrupti error quisquam voluptatibus optio itaque cum incidunt aperiam hic excepturi ipsum neque suscipit ab quasi quas",
  },

  {
    question: "What are the functionnalities set in our service ?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ducimus delectus adipisci! Sed, corrupti error quisquam voluptatibus optio itaque cum incidunt aperiam hic excepturi ipsum neque suscipit ab quasi quas",
  },

  {
    question: "What are the languages supported ?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ducimus delectus adipisci! Sed, corrupti error quisquam voluptatibus optio itaque cum incidunt aperiam hic excepturi ipsum neque suscipit ab quasi quas",
  },

  {
    question: "Is there a system of subtitles ?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ducimus delectus adipisci! Sed, corrupti error quisquam voluptatibus optio itaque cum incidunt aperiam hic excepturi ipsum neque suscipit ab quasi quas",
  },

  {
    question: "Is there a parental control ?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ducimus delectus adipisci! Sed, corrupti error quisquam voluptatibus optio itaque cum incidunt aperiam hic excepturi ipsum neque suscipit ab quasi quas",
  },
];

function FaqPage() {
  const [selected, setSelected] = useState(null);

  const toggle = (i: any) => {
    if (selected == i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  return (
    <>
      <Header></Header>
      <main className="content-container">
        <div className="wrapper_faq">
          <div className="accordion_faq">
            <div className="faq_title">
              <h2>Frequently Asked Questions</h2>
            </div>
            {data.map((question, i) => (
              <div className="question_faq">
                <div className="title_faq" onClick={() => toggle(i)}>
                  <h2>{question.question}</h2>
                  <span>{selected === i ? "-" : "+"}</span>
                </div>
                <div
                  className={
                    selected === i ? "content_faq show" : "content_faq"
                  }
                >
                  <p>{question.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}

export default FaqPage;
