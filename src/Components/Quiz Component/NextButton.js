import { Button, makeStyles } from "@material-ui/core";
import React, { useContext } from "react";
import "./NextButton.css";
import { QuizContext } from "../Helpers/Contexts";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#7412d7",
    outlinedPrimart: "#7412d7",
    size: "large",
    fullWidth: "true",
  },
}));

function NextButton() {
  const { currentQuestion, setCurrentQuestion } = useContext(QuizContext);
  const classes = useStyles();

  function clickMe() {
    if (currentQuestion < 9) {
      setCurrentQuestion(currentQuestion + 1);
    }
  }

  return (
    <div className="nextButton">
      <Button
        classes={{ root: classes.root }}
        size="large"
        color="primary"
        onClick={clickMe}
      >
        NEXT
      </Button>
    </div>
  );
}

export default NextButton;
