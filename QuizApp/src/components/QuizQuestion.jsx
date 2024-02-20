import React from "react";
import "../App.css";
import QuizOptions from "./QuizOptions";

function QuizQuestion(props) {
  let x = 10;
  return (
    <div className="questionContainer">
      {props.quizes.map((quiz, index) => (
        <form className="formTag">
          <p key={index} className="questionH">
            {`${index + 1})  ${quiz.question}`}
          </p>
          <div className="optionsDiv">
            <input
              type="radio"
              id={`${index}+${x}`}
              name={quiz.category}
              value={quiz.correct_answer}
              onChange={(e) => {
                props.checkAnswer(e.target.value, quiz);
              }}
            ></input>
            <label htmlFor={`${index}+${x}`} className="labelName">
              {quiz.correct_answer}
            </label>
          </div>
          <QuizOptions quiz={quiz} index={index} />
        </form>
      ))}
    </div>
  );
}

export default QuizQuestion;
