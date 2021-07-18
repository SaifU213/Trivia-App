import React from "react";
import "./MultipleChoice.css";

function clickMe() {
  alert("You clicked me!");
}

function MultipleChoice() {
  return (
    <div className="multipleChoice">
      <button onClick={clickMe}></button>
    </div>
  );
}

export default MultipleChoice;
