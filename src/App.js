import "./App.css";
import React, { useState, useEffect } from "react";
import Quiz from "./Components/Quiz";
import { QuizContext } from "./Components/Helpers/Contexts";

const API_URL =
  "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple";

function App() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [disableButton, setDisableButton] = useState("false");

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data.results);
      });
  }, []);

  return questions.length > 0 ? (
    <div className="app">
      <div className="app__body">
        <QuizContext.Provider
          value={{
            questions,
            setQuestions,
            currentQuestion,
            setCurrentQuestion,
            score,
            setScore,
            disableButton,
            setDisableButton,
          }}
        >
          <Quiz />
        </QuizContext.Provider>
      </div>
    </div>
  ) : (
    <h1> Loading... </h1>
  );
}

export default App;
