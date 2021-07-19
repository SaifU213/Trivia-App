import { Button, makeStyles } from "@material-ui/core";
import React from "react";
import "./NextButton.css";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#7412d7",
    outlinedPrimart: "#7412d7",
    size: "large",
    fullWidth: "true",
  },
}));

function NextButton() {
  const classes = useStyles();

  return (
    <div className="nextButton">
      <Button classes={{ root: classes.root }} size="large" color="primary">
        NEXT
      </Button>
    </div>
  );
}

export default NextButton;
