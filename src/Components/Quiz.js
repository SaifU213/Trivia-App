import React, { useState } from "react";
import MultipleChoice from "./Quiz Component/MultipleChoice";
import NextButton from "./Quiz Component/NextButton";
import Question from "./Quiz Component/Question";
import QuestionNumber from "./Quiz Component/QuestionNumber";
import { QuizContext } from "./Helpers/Contexts";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  return (
    <div className="quiz">
      <div className="questionNumber">
        <QuestionNumber />
      </div>
      <div className="question">
        <Question />
      </div>
      <div className="multipleChoice">
        <MultipleChoice />
      </div>
      <div className="nextButton">
        <NextButton />
      </div>
    </div>
  );
}

export default Quiz;
