import "./App.css";
//import React, { useState } from "react";
import React from "react";
//import Menu from "./Components/Menu";
import Question from "./Components/Question";
import QuestionNumber from "./Components/QuestionNumber";
import NextButton from "./Components/NextButton";
import MultipleChoice from "./Components/MultipleChoice";

function App() {
  //const [gameState, setGameState] = useState("menu");
  //const [questionNum, setQuestionNum] = useState(0);
  //const [score, set] = useState(0);

  return (
    <div className="app">
      <div className="app__body">
        <QuestionNumber />
        <Question />
        <MultipleChoice />
        <NextButton />
      </div>
    </div>
  );
}

export default App;
