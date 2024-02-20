import React, { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import QuizQuestion from "./components/QuizQuestion";

function QuizContainer() {
  const [quizes, setQuizes] = useState([]);
  const [correct, setCorrect] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(
        "https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple"
      )
      .then((response) => {
        setQuizes(response.data.results);
      })
      .catch((error) => {
        console.log("Errors:", error);
      });
  }, []);
  function checkAnswer(event, object1) {
    if (event == object1.correct_answer) {
      setCorrect((pre) => pre + 1);
    } else {
      console.log("Not Answer");
    }
  }
  function answerSubmit() {
    setShowModal(true);
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <div className="mainContainer">
      <div className="heading">
        <h3>Category: {quizes[0]?.category}</h3>
        <h1>Quiz App</h1>
        <h2>Score: {correct}/10</h2>
      </div>
      {showModal ? (
        <div className="modal">
          <h1>You have Finished</h1>
          <h1>Score: {correct}/10</h1>
        </div>
      ) : (
        ""
      )}

      <QuizQuestion quizes={quizes} checkAnswer={checkAnswer} />
      <button type="button" className="submitButton" onClick={answerSubmit}>
        Submit
      </button>
    </div>
  );
}

export default QuizContainer;
