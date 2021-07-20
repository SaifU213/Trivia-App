import React, { useContext } from "react";
import "./Question.css";
import { QuizContext } from "../Helpers/Contexts";

function Question() {
  const { questions, currentQuestion } = useContext(QuizContext);

  return (
    <div className="question">
      <h1
        dangerouslySetInnerHTML={{
          __html: questions[currentQuestion].question,
        }}
      />
    </div>
  );
}

export default Question;
