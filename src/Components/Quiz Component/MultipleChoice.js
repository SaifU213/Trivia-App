import React, { useState, useContext } from "react";
import "./MultipleChoice.css";
import { Button, makeStyles } from "@material-ui/core";
import { QuizContext } from "../Helpers/Contexts";

function MultipleChoice() {
  const {
    questions,
    currentQuestion,
    score,
    setScore,
    disableButton,
    setDisableButton,
  } = useContext(QuizContext);

  const useStyles = makeStyles((theme) => ({
    root: {
      color: "#7412d7",
      outlinedPrimart: "#7412d7",
      size: "large",
      fullWidth: "true",
      disabled: { disableButton },
    },
  }));

  const classes = useStyles();

  const handleAnswer = (answer) => {
    if (answer === questions[currentQuestion].correct_answer) {
      setScore(score + 1);
    }
    if (currentQuestion == 9) {
      alert("You've score " + score + " out of 10!");
    }
  };

  const shuffledAnswer = [
    questions[currentQuestion].correct_answer,
    ...questions[currentQuestion].incorrect_answers,
  ].sort(() => Math.random() - 0.5);

  return (
    <div className="multipleChoice">
      <Button
        classes={{ root: classes.root }}
        variant="outlined"
        color="primary"
        size="large"
        onClick={() => handleAnswer(shuffledAnswer[0])}
      >
        {shuffledAnswer[0]}
      </Button>
      <Button
        classes={{ root: classes.root }}
        variant="outlined"
        color="primary"
        size="large"
        onClick={() => handleAnswer(shuffledAnswer[1])}
      >
        {shuffledAnswer[1]}
      </Button>
      <Button
        classes={{ root: classes.root }}
        variant="outlined"
        color="primary"
        size="large"
        onClick={() => handleAnswer(shuffledAnswer[2])}
      >
        {shuffledAnswer[2]}
      </Button>
      <Button
        classes={{ root: classes.root }}
        variant="outlined"
        color="primary"
        size="large"
        onClick={() => handleAnswer(shuffledAnswer[3])}
      >
        {shuffledAnswer[3]}
      </Button>
    </div>
  );
}

export default MultipleChoice;
