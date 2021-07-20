import React, { useContext } from "react";
import "./QuestionNumber.css";
import { QuizContext } from "../Helpers/Contexts";

function QuestionNumber() {
  const { currentQuestion } = useContext(QuizContext);

  const num = currentQuestion + 1;

  return (
    <div className="questionNumber">
      <h4>Question {num} of 10</h4>
    </div>
  );
}

export default QuestionNumber;
