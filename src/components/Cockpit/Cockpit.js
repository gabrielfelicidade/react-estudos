import React, { useEffect } from "react";

import classes from "./Cockpit.module.css";

const Cockpit = (props) => {
  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
  });

  const attachedClasses = [];
  let buttonClass = "";

  if (props.showPersons) {
    buttonClass = classes.Red;
  }

  if (props.persons.length <= 2) {
    attachedClasses.push(classes.red);
  }
  if (props.persons.length <= 1) {
    attachedClasses.push(classes.normal);
  }

  return (
    <div className={classes.Cockpit}>
      <h1 className={attachedClasses.join(" ")}>Hi, Testing</h1>
      <button className={buttonClass} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

export default Cockpit;
