import React from "react";
import "../App.css";

function QuizOptions(props) {
  return (
    <>
      {props.quiz.incorrect_answers.map((options, i) => (
        <div className="optionsDiv">
          <input
            type="radio"
            id={`${props.index}+${i}`}
            name={props.quiz.category}
            value={options}
            onChange={(e) => {
              props.checkAnswer(e.target.value, quiz);
            }}
          ></input>
          <label htmlFor={`${props.index}+${i}`} className="labelName">
            {options}
          </label>
        </div>
      ))}
    </>
  );
}

export default QuizOptions;
