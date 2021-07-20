import React, { useState, useContext } from "react";
import "./MultipleChoice.css";
import { Button, makeStyles } from "@material-ui/core";
import { QuizContext } from "../Helpers/Contexts";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#7412d7",
    outlinedPrimart: "#7412d7",
    size: "large",
    fullWidth: "true",
  },
}));

function MultipleChoice() {
  const { questions, currentQuestion } = useContext(QuizContext);

  const [state, setstate] = useState("A. Answer 1");

  const classes = useStyles();

  function clickMe() {
    setstate("B. Answer 2");
    //alert("You clicked me!");
  }

  return (
    <div className="multipleChoice">
      <Button
        classes={{ root: classes.root }}
        variant="outlined"
        color="primary"
        size="large"
        // onClick={clickMe}
      >
        <span
          dangerouslySetInnerHTML={{
            __html: questions[currentQuestion].correct_answer,
          }}
        />
      </Button>
      <Button
        classes={{ root: classes.root }}
        variant="outlined"
        color="primary"
        size="large"
        onClick={clickMe}
      >
        {questions[currentQuestion].correct_answer}
      </Button>
      <Button
        classes={{ root: classes.root }}
        variant="outlined"
        color="primary"
        size="large"
        onClick={clickMe}
      >
        {questions[currentQuestion].correct_answer}
      </Button>
      <Button
        classes={{ root: classes.root }}
        variant="outlined"
        color="primary"
        size="large"
        onClick={clickMe}
      >
        {questions[currentQuestion].correct_answer}
      </Button>
    </div>
  );
}

export default MultipleChoice;
