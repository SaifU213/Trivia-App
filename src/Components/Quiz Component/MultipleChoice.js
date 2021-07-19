import React, { useState } from "react";
import "./MultipleChoice.css";
import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#7412d7",
    outlinedPrimart: "#7412d7",
    size: "large",
    fullWidth: "true",
  },
}));

function MultipleChoice() {
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
        onClick={clickMe}
      >
        {state}
      </Button>
      <Button
        classes={{ root: classes.root }}
        variant="outlined"
        color="primary"
        size="large"
        onClick={clickMe}
      >
        {state}
      </Button>
      <Button
        classes={{ root: classes.root }}
        variant="outlined"
        color="primary"
        size="large"
        onClick={clickMe}
      >
        {state}
      </Button>
      <Button
        classes={{ root: classes.root }}
        variant="outlined"
        color="primary"
        size="large"
        onClick={clickMe}
      >
        {state}
      </Button>
    </div>
  );
}

export default MultipleChoice;
