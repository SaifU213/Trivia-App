import "./App.css";
//import React, { useState } from "react";
import React, { useState } from "react";
import Menu from "./Components/Menu";
import Quiz from "./Components/Quiz";
// import Question from "./Components/Question";
// import QuestionNumber from "./Components/QuestionNumber";
// import NextButton from "./Components/NextButton";
// import MultipleChoice from "./Components/MultipleChoice";

const API_URL =
  "https://opentdb.com/api.php?amount=20&category=9&difficulty=easy&type=multiple";

function App() {
  const [gameState, setGameState] = useState("quiz");
  //const [questionNum, setQuestionNum] = useState(0);
  //const [score, set] = useState(0);

  return (
    <div className="app">
      <div className="app__body">
        {/* {gameState === "menu" && <Menu />} */}
        {gameState === "quiz" && <Quiz />}
      </div>
    </div>
  );
}

export default App;
