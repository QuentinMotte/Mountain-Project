import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Footer from "../component/Footer";
import Header from "../component/Header";
import landingHeader from "../img/Landing_page.jpg";

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
];

function Landing() {
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
        <div className="landing_page_banner">
          <img src={landingHeader} alt="poster" />
        </div>
        <div className="landing_page_faq">
          <div className="wrapper_faq">
            <div className="accordion_faq">
              <h2>Frequently Asked Questions</h2>
              <br />
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
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}

export default Landing;
